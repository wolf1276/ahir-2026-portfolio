"use client";
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, ZoomIn, ZoomOut } from 'lucide-react';

// Set worker source for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumePage() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.2);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const goPrev = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goNext = () => setPageNumber((prev) => Math.min(prev + 1, numPages));
  const zoomIn = () => setScale((s) => Math.min(s + 0.2, 3));
  const zoomOut = () => setScale((s) => Math.max(s - 0.2, 0.5));

  return (
    <main className="min-h-dvh bg-[#0a0a0a] flex flex-col items-center py-12 px-4">
      <section className="w-full max-w-4xl bg-[#151515] rounded-lg border border-gray-600 shadow-xl p-6 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center text-gray-100">Resume</h1>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/resume.pdf" download>
              <ArrowDown className="mr-2 h-4 w-4" />
              Download
            </Link>
          </Button>
          <Button asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Open in new tab
            </Link>
          </Button>
          <Button onClick={zoomIn}>
            <ZoomIn className="mr-2 h-4 w-4" /> Zoom In
          </Button>
          <Button onClick={zoomOut}>
            <ZoomOut className="mr-2 h-4 w-4" /> Zoom Out
          </Button>
        </div>
        <div className="flex justify-center gap-2 mb-4">
          <Button onClick={goPrev} disabled={pageNumber <= 1}>Prev</Button>
          <span className="text-gray-300">
            Page {pageNumber} of {numPages}
          </span>
          <Button onClick={goNext} disabled={pageNumber >= numPages}>Next</Button>
        </div>
        <div className="flex justify-center overflow-auto">
          <Document
            file="/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<p className="text-gray-400">Loading PDF…</p>}
            renderMode="canvas"
            className="shadow-lg"
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
        </div>
      </section>
    </main>
  );
}
