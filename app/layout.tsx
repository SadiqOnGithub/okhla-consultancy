import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Okhla Consultancy | Full Stack, DevOps & AI Solutions",
  description:
    "Empowering businesses with cutting-edge full stack development, DevOps, cloud infrastructure, and generative AI solutions. Expert React, Next.js, Node.js, AWS, and AI integration services.",
  keywords: [
    "Full Stack Development",
    "DevOps",
    "Cloud Infrastructure",
    "Generative AI",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Azure",
    "AI Integration",
    "Custom Chatbots",
    "Software Consultancy",
  ],
  openGraph: {
    title: "Okhla Consultancy | Full Stack, DevOps & AI Solutions",
    description:
      "Empowering Your Business with Full Stack, DevOps & AI Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
