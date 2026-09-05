import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/themeProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "QuickFix",
  description: "Example Business Management Website, built with Next.js, TailwindCSS, & TypeScript.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
