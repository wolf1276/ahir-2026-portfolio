import { Code2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

type Day = { date: Date; count: number } | null;

async function getLeetCodeCalendar() {
  const username = "ahir_codes_py";
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query userProfileCalendar($username: String!) {
          matchedUser(username: $username) {
            userCalendar { submissionCalendar }
          }
        }`,
        variables: { username }
      }),
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    const json = res.ok ? await res.json() : null;
    const raw = json?.data?.matchedUser?.userCalendar?.submissionCalendar;
    if (!raw) throw new Error("Failed to fetch LeetCode calendar");

    return JSON.parse(raw) as Record<string, number>;
  } catch (error) {
    console.error("Error fetching leetcode calendar:", error);
    return {};
  }
}

function buildWeeks(calendar: Record<string, number>): Day[][] {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const rangeStart = new Date(today);
  rangeStart.setUTCDate(rangeStart.getUTCDate() - 370);

  // Align to the Sunday on/before rangeStart, like GitHub's calendar.
  const gridStart = new Date(rangeStart);
  gridStart.setUTCDate(gridStart.getUTCDate() - gridStart.getUTCDay());

  const days: Day[] = [];
  const cursor = new Date(gridStart);
  while (cursor <= today) {
    const timestamp = Math.floor(cursor.getTime() / 1000);
    days.push({ date: new Date(cursor), count: calendar[timestamp] ?? 0 });
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  const weeks: Day[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function levelColor(count: number) {
  if (count === 0) return "#EEEEEE";
  if (count <= 2) return "#9BE9A8";
  if (count <= 4) return "#40C463";
  if (count <= 6) return "#30A14E";
  return "#216E39";
}

export default async function LeetCodeStatsSection() {
  const calendar = await getLeetCodeCalendar();
  const weeks = buildWeeks(calendar);

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

        {/* Clickable Heatmap Card */}
        <Link
          href="https://leetcode.com/u/ahir_codes_py/"
          target="_blank"
          rel="noopener noreferrer"
          className="group border bg-card text-card-foreground rounded-xl p-6 flex flex-col gap-6 shadow-xs relative overflow-hidden transition-all duration-300 hover:border-foreground/30 hover:scale-[1.01] hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="size-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-semibold text-sm">Submission Calendar</span>
            </div>
            <span className="text-xs font-semibold bg-white text-black px-3.5 py-1 rounded-full transition-all duration-300 group-hover:scale-105 shadow-xs inline-flex items-center gap-1.5">
              ahir_codes_py
              <ArrowUpRight className="size-3.5 text-black" />
            </span>
          </div>

          {/* Calendar Heatmap (GitHub-style, built from LeetCode's own submission data) */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
            <div className="min-w-[680px] w-full flex flex-col gap-1 py-2">
              {/* Month labels */}
              <div className="flex gap-[3px] ml-7">
                {weeks.map((week, i) => {
                  const firstValidDay = week.find((d) => d !== null);
                  const isMonthStart =
                    firstValidDay &&
                    firstValidDay.date.getUTCDate() <= 7 &&
                    (i === 0 || weeks[i - 1].some(
                      (d) => d && d.date.getUTCMonth() !== firstValidDay.date.getUTCMonth()
                    ));
                  return (
                    <div key={i} className="w-[11px] text-[10px] text-muted-foreground leading-none">
                      {isMonthStart ? MONTH_LABELS[firstValidDay!.date.getUTCMonth()] : ""}
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-[3px]">
                {/* Weekday labels */}
                <div className="flex flex-col gap-[3px] mr-2 text-[10px] text-muted-foreground leading-none w-6">
                  <span className="h-[11px]" />
                  <span className="h-[11px]">Mon</span>
                  <span className="h-[11px]" />
                  <span className="h-[11px]">Wed</span>
                  <span className="h-[11px]" />
                  <span className="h-[11px]">Fri</span>
                  <span className="h-[11px]" />
                </div>

                {/* Weeks grid */}
                <div className="flex gap-[3px]">
                  {weeks.map((week, i) => (
                    <div key={i} className="flex flex-col gap-[3px]">
                      {week.map((day, j) =>
                        day ? (
                          <div
                            key={j}
                            className="w-[11px] h-[11px] rounded-sm"
                            style={{ backgroundColor: levelColor(day.count) }}
                            title={`${day.date.toISOString().split("T")[0]}: ${day.count} submission${day.count === 1 ? "" : "s"}`}
                          />
                        ) : (
                          <div key={j} className="w-[11px] h-[11px]" />
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
