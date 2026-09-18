import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { EmergencyBanner } from "@/components/layout/emergency-banner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingContact } from "@/components/layout/floating-contact";
import { PageLoader } from "@/components/layout/page-loader";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kify Hospital | Your Health. Our Responsibility.",
  description:
    "Kify Hospital - Multi-specialty hospital in Rajahmundry providing world-class medical infrastructure and compassionate care. 24/7 Emergency, Diabetes, Pediatrics, Surgery and more.",
  keywords: [
    "hospital rajahmundry",
    "multi speciality hospital",
    "emergency care",
    "diabetes treatment",
    "pediatrician rajahmundry",
    "kify hospital",
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        <PageLoader />
        <EmergencyBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
