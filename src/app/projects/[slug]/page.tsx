import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { slugify } from "@/lib/utils";

type Project = (typeof DATA.projects)[number];

function getProject(slug: string): Project | undefined {
  return DATA.projects.find((project) => slugify(project.title) === slug);
}

export function generateStaticParams() {
  return DATA.projects.map((project) => ({ slug: slugify(project.title) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} Project`,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title} Project | Ahir Sarkar`,
      description: project.description,
      url: `https://www.ahirrr.in/projects/${slug}`,
      type: "article",
      images: project.image ? [{ url: project.image, alt: `Screenshot of ${project.title}` }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const githubLink = project.links.find((link) => link.type.toLowerCase() === "github")?.href ?? project.href;
  const liveLink = project.links.find((link) => {
    const type = link.type.toLowerCase();
    return type === "website" || type === "live demo" || type === "demo";
  })?.href;

  return (
    <main className="min-h-dvh flex flex-col gap-10">
      <article className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Link href="/#projects" className="text-sm text-muted-foreground underline underline-offset-4">
            Back to projects
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{project.title}</h1>
          <p className="text-muted-foreground">{project.dates}</p>
        </div>

        {project.image && (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width={1397}
            height={755}
            sizes="(max-width: 768px) 100vw, 672px"
            className="w-full rounded-xl border object-cover"
            priority
          />
        )}

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Problem solved</h2>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">My contribution</h2>
          <p className="text-muted-foreground leading-relaxed">
            Built and documented this project as part of Ahir Sarkar&apos;s portfolio. The linked repository contains the project&apos;s implementation and source details.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Technologies used</h2>
          <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <li key={technology} className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
                {technology}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Project links</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              View {project.title} on GitHub
            </a>
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                Open the {project.title} live demo
              </a>
            )}
          </div>
        </section>
      </article>
    </main>
  );
}
