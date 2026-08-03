import { Icons } from "@/components/icons";
import { GitBranch, Flame, Users, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";

async function getGitHubData() {
  const username = "wolf1276";
  try {
    // Fetch GitHub User Profile
    const profileRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    const profile = profileRes.ok ? await profileRes.json() : { public_repos: 48, followers: 1 };
    
    // Fetch GitHub Contribution HTML
    const contributionsRes = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      next: { revalidate: 3600 }
    });
    
    let totalContributions = 929;
    let currentStreak = 1;
    
    if (contributionsRes.ok) {
      const html = await contributionsRes.text();
      const totalMatch = html.match(/(\d+[,.\d]*)\s+contributions?\s+in the last year/i);
      if (totalMatch) {
        totalContributions = parseInt(totalMatch[1].replace(/,/g, ""), 10);
      }
      
      const cellRegex = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*level="(\d)"|level="(\d)"[^>]*data-date="(\d{4}-\d{2}-\d{2})"/g;
      let match;
      const days: { date: string; level: number }[] = [];
      
      while ((match = cellRegex.exec(html)) !== null) {
        const date = match[1] || match[4];
        const level = parseInt(match[2] || match[3], 10);
        days.push({ date, level });
      }
      
      days.sort((a, b) => b.date.localeCompare(a.date));
      
      const todayStr = new Date().toISOString().split("T")[0];
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];
      
      const todayDay = days.find(d => d.date === todayStr);
      const yesterdayDay = days.find(d => d.date === yesterdayStr);
      
      let startIdx = -1;
      if (todayDay && todayDay.level > 0) {
        startIdx = days.findIndex(d => d.date === todayStr);
      } else if (yesterdayDay && yesterdayDay.level > 0) {
        startIdx = days.findIndex(d => d.date === yesterdayStr);
      }
      
      if (startIdx !== -1) {
        let streak = 0;
        for (let i = startIdx; i < days.length; i++) {
          if (days[i].level > 0) {
            streak++;
          } else {
            break;
          }
        }
        currentStreak = streak;
      }
    }
    
    return {
      publicRepos: profile.public_repos,
      followers: profile.followers,
      totalContributions,
      currentStreak
    };
  } catch (error) {
    console.error("Error fetching github data:", error);
    return {
      publicRepos: 48,
      followers: 1,
      totalContributions: 929,
      currentStreak: 1
    };
  }
}

export default async function GitHubActivitySection() {
  const stats = await getGitHubData();

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
          className="group block border bg-card text-card-foreground rounded-xl p-6 flex flex-col gap-6 shadow-xs relative overflow-hidden transition-all duration-300 hover:border-foreground/30 hover:scale-[1.01] hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
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
              <img
                src="https://ghchart.rshah.org/40c463/wolf1276"
                alt="wolf1276's GitHub contribution graph"
                className="w-full h-auto object-contain dark:opacity-90 dark:brightness-110"
                loading="lazy"
              />
            </div>
          </div>

          {/* Summary Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border/50">
            {/* Stat Box 1: Total Contributions */}
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-muted/30 border border-border/30 group-hover:bg-muted/50 transition-all duration-200">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="size-3.5 text-emerald-500" />
                <span>Contributions</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                {stats.totalContributions}
              </span>
            </div>

            {/* Stat Box 2: Current Streak */}
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-muted/30 border border-border/30 group-hover:bg-muted/50 transition-all duration-200">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Flame className="size-3.5 text-orange-500" />
                <span>Current Streak</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                {stats.currentStreak} {stats.currentStreak === 1 ? "day" : "days"}
              </span>
            </div>

            {/* Stat Box 3: Public Repos */}
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-muted/30 border border-border/30 group-hover:bg-muted/50 transition-all duration-200">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <GitBranch className="size-3.5 text-blue-500" />
                <span>Repositories</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                {stats.publicRepos}
              </span>
            </div>

            {/* Stat Box 4: Followers */}
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-muted/30 border border-border/30 group-hover:bg-muted/50 transition-all duration-200">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Users className="size-3.5 text-purple-500" />
                <span>Followers</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                {stats.followers}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
