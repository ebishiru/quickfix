"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "./themeProvider";

export default function Header() {
    const [open, setOpen] = React.useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={theme}>
            <nav className="flex justify-between items-center px-4 py-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100">
                <span className="font-bold text-2xl">QuickFix</span>
                <button className="sm:hidden cursor-pointer px-2 text-4xl" onClick={() => setOpen(!open)}>
                    ≡
                </button>
                <div className="hidden sm:flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact</Link>
                    <button onClick={toggleTheme}>
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                </div>
            </nav>
            {/* Mobile Dropdown for Menu */}
            <nav className={`${open ? 'block' : 'hidden'} flex flex-col justify-content items-center gap-3 sm:hidden p-4 bg-indigo-100 font-bold text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100`}>
                <Link href="/" onClick={() => setOpen(!open)}>Home</Link>
                <Link href="/about" onClick={() => setOpen(!open)}>About</Link>
                <Link href="/services" onClick={() => setOpen(!open)}>Services</Link>
                <Link href="/contact" onClick={() => setOpen(!open)}>Contact</Link>
                <button onClick={toggleTheme}>
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
            </nav>
        </header>
    )
}