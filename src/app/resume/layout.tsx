import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "View Ahir Sarkar's resume and experience as a Web3 developer and CAD designer.",
  alternates: { canonical: "/resume" },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
