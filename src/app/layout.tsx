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
  title: "Sagar Verma | Full Stack Developer",

  description:
    "Full Stack Developer specializing in PHP, JavaScript, Next.js, MySQL, and modern web applications.",

  keywords: [
    "Sagar Verma",
    "Full Stack Developer",
    "PHP Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "React Developer",
    "MySQL Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Sagar Verma",
    },
  ],

  creator: "Sagar Verma",

  openGraph: {
    title: "Sagar Verma | Full Stack Developer",
    description:
      "Explore my projects, skills, and web development journey.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}