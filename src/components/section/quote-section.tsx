"use client";

import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

// Helper: simple retry wrapper for fetch
async function retryFetch(url: string, attempts = 3, delayMs = 500): Promise<Response> {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res;
      // Non‑2xx response – treat as failure to retry
      throw new Error(`Bad status ${res.status}`);
    } catch (e) {
      if (i === attempts - 1) throw e;
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  // Should never reach here
  throw new Error('Exhausted retries');
}

// Unified quote fetcher with fallback APIs
type QuoteData = { content: string; author: string };
async function fetchRandomQuote(): Promise<QuoteData> {
  // 1️⃣ Quotable (preferred)
  try {
    const res = await retryFetch("https://api.quotable.io/random");
    const json = await res.json();
    return { content: json.content, author: json.author };
  } catch (e) {
    console.warn("Quotable failed, fallback →", e);
  }
  // 2️⃣ ZenQuotes
  try {
    const res = await retryFetch("https://zenquotes.io/api/random");
    const json = await res.json();
    // ZenQuotes returns an array with one object
    return { content: json[0].q, author: json[0].a };
  } catch (e) {
    console.warn("ZenQuotes failed, fallback →", e);
  }
  // 3️⃣ Final fallback – static placeholder
  return { content: "Stay inspired!", author: "Your App" };
}

export default function QuoteSection() {
    const [quote, setQuote] = useState<{content:string; author:string} | null>(null);
  useEffect(() => {
    async function fetchQuote() {
      try {
        const { content, author } = await fetchRandomQuote();
        setQuote({ content, author });
      } catch (e) {
        console.error("Unable to load a quote:", e);
        setQuote({ content: "Quote could not be loaded", author: "—" });
      }
    }
    fetchQuote();
  }, []);
  return (
    <div className="border border-border bg-card/30 rounded-xl p-8 relative overflow-hidden flex items-center min-h-[120px]">
      {/* Large Background Quote Symbol */}
      <Quote className="absolute left-6 size-24 text-muted-foreground/10 stroke-[1] pointer-events-none" />
      
      <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 pl-12 pr-2">
        <p className="text-muted-foreground text-sm sm:text-base italic font-medium leading-relaxed text-left max-w-lg">
          &ldquo;{quote?.content ?? "Loading..."}&rdquo;
        </p>
        <span className="text-foreground text-sm sm:text-base italic font-semibold whitespace-nowrap self-end md:self-auto">
          &mdash; {quote?.author ?? "Anonymous"}
        </span>
      </div>
    </div>
  );
}
