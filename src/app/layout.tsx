import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GridSmallBackgroundDemo } from "@/components/GridSmallBackgroundDemo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arpit Neewaliya — Full Stack Engineer",
  description: "Personal portfolio of Arpit Neewaliya. Full-stack engineer crafting high-performance digital experiences with clean design and smooth animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden selection:bg-zinc-700 selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <GridSmallBackgroundDemo />
          
          <div className="relative z-10 flex flex-col min-h-full w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
