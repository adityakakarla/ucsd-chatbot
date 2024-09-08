import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300","400","500","600","700","800","900"] });

export const metadata: Metadata = {
  title: "ucsdGPT",
  description: "the gen ai tool to make life 10x easier for ucsd students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-[100svh] ${poppins.className} bg-gradient-to-br from-light1 to-light2 text-dark`}>{children}</body>
    </html>
  );
}
