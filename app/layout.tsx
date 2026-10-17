import type { Metadata } from "next";
import "./dreamos.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahil Kumar | Web Developer · DreamOS Portfolio",
  description: "Interactive portfolio of Sahil Kumar, a web developer working with React, Next.js, WordPress, Shopify, eCommerce and frontend automation.",
  openGraph: { title: "Sahil Kumar — Web Developer", description: "Work, skills and experience inside an interactive retro desktop." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
