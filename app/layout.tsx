import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ucsdGPT",
  description: "A chatbot for UCSD courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white bg-gradient-to-b from-blue-950 via-sky-700 to-yellow-400 min-h-screen`}>{children}</body>
    </html>
  );
}
