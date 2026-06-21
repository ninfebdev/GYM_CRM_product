import type { Metadata } from "next";
import localFont from "next/font/local";
import { Merriweather, Young_Serif, DM_Serif_Display } from "next/font/google";
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

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GYM CRM",
  description: "Gym CRM product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${averta.variable} ${merriweather.variable} ${youngSerif.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
