import type { Metadata } from "next";

import "./globals.css";

import BottomBar from "../components/BottomBar";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";



export const metadata: Metadata = {
  title: "Lenika Maharjan | Creative Portfolio",
  description: "A creative, interactive portfolio for Lenika Maharjan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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

