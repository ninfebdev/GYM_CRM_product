import type { Metadata } from "next";
import localFont from "next/font/local";
import { Merriweather, Young_Serif, Geom, Caprasimo } from "next/font/google";
import "./globals.css";

// Averta — local font, app-wide default (consumed via --font-averta in globals.css)
const averta = localFont({
  src: "../fonts/Averta.woff2",
  variable: "--font-averta",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-young-serif",
  display: "swap",
});

const geom = Geom({
  subsets: ["latin"],
  variable: "--font-geom",
  display: "swap",
});

const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caprasimo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GYM CRM — Run Your Entire Gym From One Platform",
  description:
    "Manage members, recover renewals, track revenue, create diet and workout plans, and deliver a premium member experience — all from one platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${averta.variable} ${merriweather.variable} ${youngSerif.variable} ${geom.variable} ${caprasimo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
