import { Icons } from "@/components/icons";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GitHubActivitySection() {
  return (
    <section id="github-activity">
      <div className="flex min-h-0 flex-col gap-y-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">GitHub Activity</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </div>

        {/* Clickable Contribution Graph Card */}
        <Link
          href="https://github.com/wolf1276"
          target="_blank"
          rel="noopener noreferrer"
          className="group border bg-card text-card-foreground rounded-xl p-6 flex flex-col gap-6 shadow-xs relative overflow-hidden transition-all duration-300 hover:border-foreground/30 hover:scale-[1.01] hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icons.github className="size-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-semibold text-sm">Contributions Year Calendar</span>
            </div>
            <span className="text-xs font-semibold bg-white text-black px-3.5 py-1 rounded-full transition-all duration-300 group-hover:scale-105 shadow-xs inline-flex items-center gap-1.5">
              wolf1276
              <ArrowUpRight className="size-3.5 text-black" />
            </span>
          </div>

          {/* Graph Container with horizontal scroll on mobile */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
            <div className="min-w-[680px] w-full flex justify-center py-2">
              <Image
                src="https://ghchart.rshah.org/40c463/wolf1276"
                alt="wolf1276's GitHub contribution graph"
                width={900}
                height={180}
                sizes="(max-width: 680px) 680px, 900px"
                className="w-full h-auto object-contain dark:opacity-90 dark:brightness-110"
                loading="lazy"
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
