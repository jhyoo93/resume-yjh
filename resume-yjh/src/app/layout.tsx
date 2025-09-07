import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "유재환 · Resume",
  description: "유재환 · 웹개발자 이력서",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 selection:bg-brand-200">
        {children}
      </body>
    </html>
  );
}
