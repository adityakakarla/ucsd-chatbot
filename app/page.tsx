'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Chatbot from "@/components/Chatbot";


export default function Home() {
  const [currentOption, setCurrentOption] = useState(0);
  const [fade, setFade] = useState(true);
  const options = [
    "what's the best class to grind LeetCode?",
    "when does Geisel open?",
    "who's the best professor at UCSD?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentOption((prev) => (prev + 1) % options.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [options.length]);
  return (
    <div className="flex flex-col items-center py-8 px-4 md:p-24 space-y-10 min-h-[100svh]">
      <h1 className="text-4xl md:text-6xl font-bold">ucsdGPT</h1>
      <SignedIn>
        <Chatbot />
      </SignedIn>
      <SignedOut>
        <p className="text-xl md:text-3xl text-center">we make life 10x easier for ucsd students</p>
        <div className="rounded-lg border-2 border-dark w-48 md:w-96 h-36 flex flex-col items-center justify-center">
          <p
            className={`p-4 text-xl transition-opacity duration-500 text-center ${fade ? "opacity-100" : "opacity-0"
              }`}
          >
            {options[currentOption]}
          </p>
        </div>
        <div>
          <Button asChild className=" transition duration-300 text-lg bg-medium1 hover:bg-medium2">
            <Link href="/sign-up" className="m-4">get started</Link>
          </Button>
          <Button asChild className=" transition duration-300 text-lg bg-medium1 hover:bg-medium2">
            <Link href="/about" className="m-4">learn more</Link>
          </Button>
        </div>
      </SignedOut>
    </div>
  );
}