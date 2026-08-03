import { Code2, Trophy, Target, Percent, ArrowUpRight } from "lucide-react";
import Link from "next/link";

async function getLeetCodeData() {
  const username = "ahir_codes_py";
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            submitStats: submitStatsGlobal {
              acSubmissionNum { difficulty count }
              totalSubmissionNum { difficulty count }
            }
            profile { ranking }
          }
        }`,
        variables: { username }
      }),
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    const json = res.ok ? await res.json() : null;
    const user = json?.data?.matchedUser;
    if (!user) {
      throw new Error("Failed to fetch LeetCode stats");
    }

    const acByDifficulty = Object.fromEntries(
      user.submitStats.acSubmissionNum.map((s: { difficulty: string; count: number }) => [s.difficulty, s.count])
    );
    const totalByDifficulty = Object.fromEntries(
      user.submitStats.totalSubmissionNum.map((s: { difficulty: string; count: number }) => [s.difficulty, s.count])
    );

    return {
      totalSolved: acByDifficulty.All ?? 0,
      ranking: user.profile.ranking,
      easySolved: acByDifficulty.Easy ?? 0,
      mediumSolved: acByDifficulty.Medium ?? 0,
      hardSolved: acByDifficulty.Hard ?? 0,
      acceptanceRate: totalByDifficulty.All ? (acByDifficulty.All / totalByDifficulty.All) * 100 : 0
    };
  } catch (error) {
    console.error("Error fetching leetcode data:", error);
    return {
      totalSolved: 0,
      ranking: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      acceptanceRate: 0
    };
  }
}

export default async function LeetCodeStatsSection() {
  const stats = await getLeetCodeData();

  return (
    <section id="leetcode-stats">
      <div className="flex min-h-0 flex-col gap-y-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">LeetCode Stats</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </div>

        {/* Clickable Stats Card */}
        <Link
          href="https://leetcode.com/u/ahir_codes_py/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block border bg-card text-card-foreground rounded-xl p-6 flex flex-col gap-6 shadow-xs relative overflow-hidden transition-all duration-300 hover:border-foreground/30 hover:scale-[1.01] hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="size-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-semibold text-sm">Problem Solving Stats</span>
            </div>
            <span className="text-xs font-semibold bg-white text-black px-3.5 py-1 rounded-full transition-all duration-300 group-hover:scale-105 shadow-xs inline-flex items-center gap-1.5">
              ahir_codes_py
              <ArrowUpRight className="size-3.5 text-black" />
            </span>
          </div>

          {/* Difficulty Breakdown Bar */}
          <div className="flex w-full h-2.5 rounded-full overflow-hidden bg-muted/30">
            <div
              className="bg-emerald-500"
              style={{ width: `${stats.totalSolved ? (stats.easySolved / stats.totalSolved) * 100 : 0}%` }}
            />
            <div
              className="bg-amber-500"
              style={{ width: `${stats.totalSolved ? (stats.mediumSolved / stats.totalSolved) * 100 : 0}%` }}
            />
            <div
              className="bg-red-500"
              style={{ width: `${stats.totalSolved ? (stats.hardSolved / stats.totalSolved) * 100 : 0}%` }}
            />
          </div>

          {/* Summary Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border/50">
            {/* Stat Box 1: Total Solved */}
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-muted/30 border border-border/30 group-hover:bg-muted/50 transition-all duration-200">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Trophy className="size-3.5 text-emerald-500" />
                <span>Total Solved</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                {stats.totalSolved}
              </span>
            </div>

            {/* Stat Box 2: Easy */}
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-muted/30 border border-border/30 group-hover:bg-muted/50 transition-all duration-200">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Target className="size-3.5 text-emerald-500" />
                <span>Easy</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                {stats.easySolved}
              </span>
            </div>

            {/* Stat Box 3: Medium */}
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-muted/30 border border-border/30 group-hover:bg-muted/50 transition-all duration-200">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Target className="size-3.5 text-amber-500" />
                <span>Medium</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                {stats.mediumSolved}
              </span>
            </div>

            {/* Stat Box 4: Hard */}
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-muted/30 border border-border/30 group-hover:bg-muted/50 transition-all duration-200">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Target className="size-3.5 text-red-500" />
                <span>Hard</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                {stats.hardSolved}
              </span>
            </div>
          </div>

          {/* Secondary Row: Ranking & Acceptance */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-muted/30 border border-border/30 group-hover:bg-muted/50 transition-all duration-200">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Trophy className="size-3.5 text-blue-500" />
                <span>Global Ranking</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                #{stats.ranking?.toLocaleString?.() ?? stats.ranking}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-muted/30 border border-border/30 group-hover:bg-muted/50 transition-all duration-200">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Percent className="size-3.5 text-purple-500" />
                <span>Acceptance Rate</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                {stats.acceptanceRate?.toFixed ? stats.acceptanceRate.toFixed(1) : stats.acceptanceRate}%
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
