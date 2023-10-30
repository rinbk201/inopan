import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { M_PLUS_2 } from "next/font/google";
import Header from "@/lib/componets/header";

const inter = Inter({ subsets: ["latin"] });

const MPlus2 = M_PLUS_2({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inopan TDU App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={MPlus2.className}>
        <Header />
        <main className="pt-20 pb-8 min-h-screen">
          <Suspense fallback={"loading..."}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
