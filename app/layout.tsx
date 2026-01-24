import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import MobileNav from "@/components/Home/Navbar/MobileNav";
import LoadingAnimation from "@/components/Home/LoadingAnimation/LoadingAnimation";

const font= Inter({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:["latin"],
}

)

export const metadata: Metadata = {
  title: "Mary Valentina | Full-Stack Developer Portfolio",
  description: "Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore my projects, technical skills, and professional experience in building scalable web applications.",
  keywords: "Full-Stack Developer, React Developer, Next.js, TypeScript, Web Developer, Portfolio, Software Engineer, Frontend Developer, Backend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}>
          <LoadingAnimation />
          <ResponsiveNav/>
        
        {children}
      </body>
    </html>
  );
}
