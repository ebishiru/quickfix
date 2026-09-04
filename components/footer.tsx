"use client"

import React from "react";
import { useTheme } from "./themeProvider";

export default function Footer() {
    const { theme } = useTheme();

    return (
        <footer className={theme}>
            <p className="text-center p-2 font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100">
                &copy; {new Date().getFullYear()} QuickFix. All rights reserved. Kevin Lo.
            </p>
        </footer>
    )
}