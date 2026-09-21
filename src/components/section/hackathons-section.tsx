/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { Award, Bot, Code, Globe, Lightbulb, Trophy } from "lucide-react";

function getIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("hexafalls")) return <Trophy className="size-5 text-yellow-500" />;
  if (t.includes("yesist12")) return <Globe className="size-5 text-blue-500" />;
  if (t.includes("robotics")) return <Bot className="size-5 text-purple-500" />;
  if (t.includes("geeksforgeeks") || t.includes("hacks")) return <Code className="size-5 text-green-500" />;
  if (t.includes("bootcamp") || t.includes("ide")) return <Lightbulb className="size-5 text-orange-500" />;
  return <Award className="size-5 text-primary" />;
}

function getAchievementBadge(win: string) {
  const w = win.toLowerCase();
  let colors = "bg-primary/10 text-primary border-primary/20";
  if (w.includes("winner")) {
    colors = "bg-yellow-500/10 text-yellow-500 border-yellow-500/20 dark:bg-yellow-500/20";
  } else if (w.includes("finalist")) {
    colors = "bg-blue-500/10 text-blue-500 border-blue-500/20 dark:bg-blue-500/20";
  } else if (w.includes("3rd") || w.includes("third")) {
    colors = "bg-orange-500/10 text-orange-500 border-orange-500/20 dark:bg-orange-500/20";
  }
  return (
    <Badge className={`text-[10px] font-semibold px-2 py-0.5 border rounded-full ${colors} shadow-none`}>
      {win}
    </Badge>
  );
}

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Achievements & Competitions</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Achievements</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              During my time in university, I participated in {DATA.hackathons.length}+
              competitions and bootcamps. I love challenging myself to design engineering solutions, build innovative software, and pitch startup ideas.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.hackathons.map((hackathon: any) => (
            <TimelineItem key={hackathon.title + hackathon.dates} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                {hackathon.image ? (
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-2 border rounded-full shadow ring-2 ring-border flex items-center justify-center flex-none">
                    {getIcon(hackathon.title)}
                  </div>
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
                  <div className="flex flex-wrap items-center gap-2">
                    {hackathon.title && (
                      <h3 className="font-semibold leading-none">{hackathon.title}</h3>
                    )}
                    {hackathon.win && getAchievementBadge(hackathon.win)}
                  </div>
                  {hackathon.dates && (
                    <time className="text-xs text-muted-foreground sm:text-right shrink-0">{hackathon.dates}</time>
                  )}
                </div>
                {hackathon.location && (
                  <p className="text-sm text-muted-foreground">{hackathon.location}</p>
                )}
                {hackathon.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {hackathon.description}
                  </p>
                )}
                {hackathon.links && hackathon.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {(hackathon.links as readonly any[]).map((link, idx) => (
                      <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
