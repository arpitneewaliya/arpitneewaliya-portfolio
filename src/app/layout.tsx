import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GridSmallBackgroundDemo } from "@/components/GridSmallBackgroundDemo";
import { PORTFOLIO_DATA } from "@/data/data";
import { SITE_URL } from "@/lib/site";
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PORTFOLIO_DATA.name,
  url: SITE_URL,
  description: PORTFOLIO_DATA.bio[0],
  sameAs: [
    PORTFOLIO_DATA.socials.github,
    PORTFOLIO_DATA.socials.linkedin,
    PORTFOLIO_DATA.socials.twitter,
    PORTFOLIO_DATA.socials.leetcode,
    PORTFOLIO_DATA.socials.codeforces,
    PORTFOLIO_DATA.socials.devto,
    PORTFOLIO_DATA.socials.medium,
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Arpit Neewaliya - Portfolio",
  description:
    "Personal portfolio of Arpit Neewaliya. Full-stack engineer crafting high-performance digital experiences with clean design and smooth animations.",
  openGraph: {
    title: "Arpit Neewaliya - Portfolio",
    description:
      "Personal portfolio of Arpit Neewaliya. Full-stack engineer crafting high-performance digital experiences with clean design and smooth animations.",
    url: "/",
    siteName: "Arpit Neewaliya",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1672,
        height: 941,
        alt: "Arpit Neewaliya - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Neewaliya - Portfolio",
    description:
      "Personal portfolio of Arpit Neewaliya. Full-stack engineer crafting high-performance digital experiences with clean design and smooth animations.",
    images: ["/images/og-image.png"],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
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
