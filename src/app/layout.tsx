import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Arvind Sharma | Professor of Computer Science",
  description: "Personal and professional academic portfolio of Dr. Arvind Sharma, Professor of Computer Science at Global Institute of Technology. Research in AI, Deep Learning, Quantum Computing, and Trustworthy Systems.",
  keywords: ["Professor Computer Science", "Dr Arvind Sharma", "AI Research", "Deep Learning", "Quantum Computing", "Academic Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-slate-800 bg-slate-50">
        {children}
      </body>
    </html>
  );
}
