import Link from "next/link"

export default function About(){
    return (
        <div className="flex flex-col items-center py-8 px-4 md:p-24 space-y-10 min-h-[100svh] text-center">
            <h1 className="text-4xl md:text-6xl font-bold">about</h1>
            <p className="text-xl">made by aditya kakarla</p>
            <p className="text-xl">be careful—info might be inaccurate like any AI tool</p>
            <p className="text-xl">ideal prompt:<br/>what class will teach me about [XYZ]</p>
            <p className="text-xl">built with Next.js + Supabase</p>
            <a href="https://github.com/adityakakarla/ucsd-chatbot" className="text-xl underline hover:text-blue-800 transition duration-300">view the repo</a>
            <Link href="/" className="text-lg transition duration-300 border-2 border-black rounded-2xl py-1 px-3 hover:bg-light2">get started</Link>
        </div>
    )
}