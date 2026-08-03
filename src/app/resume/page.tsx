"use client";
import { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

// Set worker source for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(800);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const pageWidth = Math.max(280, Math.min(containerWidth - 32, 800));

  return (
    <main className="min-h-dvh bg-[#0a0a0a] flex flex-col items-center py-12 px-4">
      <section className="w-full max-w-4xl bg-[#151515] rounded-lg border border-gray-600 shadow-xl p-6 flex flex-col gap-6">
        <div className="relative flex items-center justify-center border-b border-gray-800 pb-4">
          <h1 className="text-2xl font-bold text-gray-100 text-center">Resume</h1>
          <Link
            href="/resume.pdf"
            download
            title="Download PDF"
            aria-label="Download PDF"
            className="absolute right-0 p-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/10 rounded-full shadow-md transition-all duration-200 hover:scale-105"
          >
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>

        <div ref={containerRef} className="w-full overflow-x-auto flex justify-center">
          <Document
            file="/resume.pdf"
            loading={<p className="text-gray-400">Loading PDF…</p>}
            renderMode="canvas"
            className="shadow-lg rounded-md overflow-hidden"
          >
            <Page 
              pageNumber={1} 
              width={pageWidth} 
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </section>
    </main>
  );
}
