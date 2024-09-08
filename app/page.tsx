'use client'

import Chatbot from "@/components/Chatbot";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center py-8 px-4 md:p-24 space-y-10 min-h-[100svh]">
      <h1 className="text-4xl md:text-6xl font-bold">ucsdGPT</h1>
      <Link href="/about" className="text-lg transition duration-300 border-2 border-black rounded-2xl py-1 px-3 hover:bg-light2">about</Link>
      <Chatbot />
    </div>
  );
}