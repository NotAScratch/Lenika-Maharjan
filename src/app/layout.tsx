import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lenika Maharjan | Creative Portfolio",
  description: "A creative, interactive portfolio for Lenika Maharjan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <ClientLayoutWrapper>
          <div className="flex-1 flex flex-col w-full">
            {children}
          </div>
          <BottomBar />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
import BottomBar from "../components/BottomBar";
