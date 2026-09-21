"use client";

import { motion } from "motion/react";
import { Wrench } from "lucide-react";
import Link from "next/link";

export default function GallerySection() {
  return (
    <section id="gallery" className="mt-8 flex flex-col gap-y-4">
      {/* Section Heading */}
      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">My</span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Gallery</h2>
      </div>

      {/* Gallery Link Card */}
      <Link
        href="/gallery"
        className="group flex items-center gap-4 border border-border bg-card/40 hover:bg-accent/10 rounded-xl p-4 transition-all duration-300 hover:border-foreground/20 hover:scale-[1.005] cursor-pointer"
      >
        <div className="p-2.5 bg-muted border border-border/80 text-foreground rounded-lg transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
          <Wrench className="size-5 transition-transform duration-300 group-hover:rotate-12" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">View the Gallery</span>
          <span className="text-sm text-muted-foreground">Captured memories and experiences</span>
        </div>
      </Link>
    </section>
  );
}
