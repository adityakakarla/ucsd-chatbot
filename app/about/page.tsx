import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About(){
    return (
        <div className="flex flex-col items-center py-8 px-4 md:p-24 space-y-10 min-h-[100svh] text-center">
            <h1 className="text-4xl md:text-6xl font-bold">about</h1>
            <p className="text-xl">made by aditya kakarla</p>
            <p className="text-xl">be careful—info might be inaccurate like any AI tool</p>
            <p className="text-xl">ideal prompt:<br/>what class will teach me about [XYZ]</p>
            <p className="text-xl">i used Next.js + Supabase + Vercel</p>
            <a href="https://github.com/adityakakarla/ucsd-chatbot" className="text-xl underline hover:text-blue-800 transition duration-300">view the repo</a>
            <Button asChild className=" transition duration-300 text-lg bg-medium1 hover:bg-medium2">
            <Link href="/sign-up" className="m-4">get started</Link>
          </Button>
        </div>
    )
}