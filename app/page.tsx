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
      {/* Statement Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center p-8 m-4 w-sm border-2 border-indigo-800 dark:border-indigo-100 rounded-3xl text-center text-lg sm:text-xl bg-indigo-100 dark:bg-indigo-800">
          <p className="font-bold text-2xl">Supporting Local</p>
          <span className="text-4xl p-4">🏠</span>
          <p className="pb-2">Proudly Supporting Local</p>
          <p>Keeping our community strong by supporting local homes, businesses, and neighbors.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 m-4 w-sm border-2 border-indigo-800 dark:border-indigo-100 rounded-3xl text-center text-lg sm:text-xl bg-indigo-100 dark:bg-indigo-800">
          <p className="font-bold text-2xl">Repairs Within a Week</p>
          <span className="text-4xl p-4">📅</span>
          <p className="pb-2">Working weekdays and weekends</p>
          <p>Fast, reliable service with most repairs scheduled within 7 days.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 m-4 w-sm border-2 border-indigo-800 dark:border-indigo-100 rounded-3xl text-center text-lg sm:text-xl bg-indigo-100 dark:bg-indigo-800">
          <p className="font-bold text-2xl">Satisfaction Guaranteed</p>
          <span className="text-4xl p-4">🛡️</span>
          <p className="pb-2">Customer Satisfaction Guaranteed</p>
          <p>We stand behind our work. If you're not satified, we keep working until you are.</p>
        </div>
      </div>
      {/* Info Section */}
      <div className="flex flex-1 flex-col items-center justify-center px-8 pt-4 pb-8 text-center text-lg sm:text-xl">
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
