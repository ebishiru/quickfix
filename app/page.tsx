"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/themeProvider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} flex flex-1 flex-col bg-white dark:bg-indigo-900 dark:text-indigo-100`}>
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <Image src="/repair_toolbox.jpg" fill alt="Repairman with Toolbox" className="object-cover object-center opacity-70 brightness-50"/>
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="font-bold text-3xl">Your Local Repair Experts</h1>
          <p className="font-bold">One call. One team. <span className="text-xl text-yellow-400">QuickFix</span></p>
        </div>
      </div>
      {/* Info Section */}
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center text-lg sm:text-xl">
        <p>From HVAC and electrical work to plumbing, mechanical repairs, and everyday maintenance, QuickFix helps keep your home or business running smoothly.</p>
        <p className="font-bold py-4">Fast service. Quality repairs. Reliable results.</p>
        <div className="flex gap-4">
          <Link href="/contact" className="bg-yellow-400 text-black py-2 px-4 text-xl rounded-md hover:bg-yellow-500 transition-all">Request a Service</Link>
          <Link href="/about" className="bg-yellow-400 text-black py-2 px-4 text-xl rounded-md hover:bg-yellow-500 transition-all">Learn More</Link>
        </div>
      </div>
    </div>
    
  );
}
