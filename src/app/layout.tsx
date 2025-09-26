import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Morris Utility Solutions — Instant-Feeling Utility Maps",
  description:
    "I convert CAD/KMZ/SHP into instant-feeling, field-ready maps and clean Feature Services. Ticketing integrations, WMS/WFS/WMTS, and offline Field Maps included.",
  metadataBase: new URL("https://morrisutilitysolutions.com"),
  openGraph: {
    title: "Morris Utility Solutions — Instant-Feeling Utility Maps",
    description:
      "Fast, field-ready GIS. Feature Services, custom web maps, and ticketing integrations that open fast and stay smooth.",
    url: "https://morrisutilitysolutions.com",
    siteName: "Morris Utility Solutions",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Instant-Feeling Utility Maps" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morris Utility Solutions — Instant-Feeling Utility Maps",
    description:
      "Fast, field-ready GIS. Feature Services, custom web maps, and ticketing integrations that open fast and stay smooth.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
