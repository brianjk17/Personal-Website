import type { Metadata } from "next"
import { Figtree, Geist_Mono, Newsreader } from "next/font/google"

import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ThemeProvider } from "@/components/theme-provider"
import { person } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: `${person.name} — ${person.title}`,
    template: `%s — ${person.name}`,
  },
  description: person.tagline,
  openGraph: {
    title: `${person.name} — ${person.title}`,
    description: person.tagline,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth antialiased",
        fontMono.variable,
        figtree.variable,
        display.variable,
        "font-sans",
      )}
    >
      <body>
        <ThemeProvider>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
