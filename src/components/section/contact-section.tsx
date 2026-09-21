"use client";

import { motion } from "motion/react";
import { Calendar, Mail } from "lucide-react";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="border border-dashed border-muted-foreground/30 rounded-xl p-10 relative">
      <div className="relative flex flex-col items-center gap-6 text-center z-10 max-w-2xl mx-auto py-4">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="sr-only">Contact: </span>
          Let&apos;s Build Something Together
        </motion.h2>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <a 
            href="https://calendly.com/ahirsarkar2022" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card hover:bg-accent hover:text-accent-foreground text-foreground font-medium transition-all duration-300 shadow-md hover:scale-[1.02] w-full sm:w-auto text-sm"
          >
            <Image
              src={DATA.avatarUrl} 
              alt={DATA.name} 
              width={20}
              height={20}
              className="size-5 rounded-full object-cover border border-muted-foreground/30" 
            />
            <span>Schedule a Call</span>
          </a>
          
          <a 
            href={`mailto:${DATA.contact.email}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border bg-transparent hover:bg-accent/40 text-muted-foreground hover:text-foreground font-medium transition-all duration-300 w-full sm:w-auto text-sm"
          >
            <Mail className="size-4" />
            <span>Send an Email</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
