import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery of Ahir Sarkar's work and experiences.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-8">
      <section className="flex min-h-0 flex-col gap-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Gallery</h1>
        <p className="text-muted-foreground leading-relaxed">
          Captured memories and experiences. More gallery entries will be added here as they are published.
        </p>
        <Link href="/" className="text-sm font-medium underline underline-offset-4">
          Return to Ahir Sarkar&apos;s portfolio
        </Link>
      </section>
    </main>
  );
}
