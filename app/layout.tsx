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

export const metadata = {
  title: 'Goodlet AI Academy | Master AI Skills & Automation',
  description: 'Go from AI-curious to AI-proficient. Learn prompt engineering, workflow automation, and AI tools from a working professional who made the transition himself. Free and paid courses available.',
  icons: {
    icon: '/goodlet-ai-icon.png',
  },
  openGraph: {
    title: 'Goodlet AI Academy | Master AI Skills & Automation',
    description: 'Go from AI-curious to AI-proficient. Structured courses in AI Foundations, Automation, Career Building, and Marketing. Start free today.',
    url: 'https://www.goodletaiacademy.com',
    siteName: 'Goodlet AI Academy',
    type: 'website',
    images: [{
      url: 'https://www.goodletaiacademy.com/api/og?title=Goodlet+AI+Academy&price=Free&level=Free+%26+Paid+Courses',
      width: 1200,
      height: 630,
      alt: 'Goodlet AI Academy — Master AI Skills & Automation',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goodlet AI Academy | Master AI Skills & Automation',
    description: 'Go from AI-curious to AI-proficient. Free and paid courses in AI, automation, and career building.',
    images: ['https://www.goodletaiacademy.com/api/og?title=Goodlet+AI+Academy&price=Free&level=Free+%26+Paid+Courses'],
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
