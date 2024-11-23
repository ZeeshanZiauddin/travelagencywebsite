/** @format */

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { ScrollArea } from "@/components/ui/scroll-area";
import WhatsappBtn from "@/components/home/whatsapp-btn";
import Head from "next/head";

// Define custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define a server function to fetch metadata
async function fetchCompanyMetadata() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/companies/${process.env.NEXT_PUBLIC_API_KEY}`,
    { cache: "no-store" } // Ensures fresh data
  );

  if (!res.ok) {
    throw new Error("Failed to fetch company metadata");
  }

  return res.json();
}

// Metadata API to dynamically generate metadata
export async function generateMetadata() {
  try {
    const company = await fetchCompanyMetadata();

    return {
      title: company.title || "Default Title",
      description: company.description || "Default description",
      keywords: company.seo_keywords || "default, keywords, here",
      icons: {
        icon: "/favicon.ico",
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);

    // Fallback metadata in case of an error
    return {
      title: "Cheap flights to sierra leone",
      description: `At CheapFlightsToSierraLeone, we specialize in providing
              affordable, reliable flight services between the UK and Sierra
              Leone. Our mission is to make your travel experience seamless and
              cost-effective, whether you're heading to Sierra Leone for
              business, leisure, or to visit family`,
      keywords: "default, keywords, fallback",
    };
  }
}

export default async function RootLayout({ children }) {
  const company = await fetchCompanyMetadata();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollArea className="h-[100vh] mw-[100vh] rounded-md border">
          <Navbar company={company} />
          <div className="container mx-auto md:px-10">
            {children}
            <WhatsappBtn />
          </div>
          <Footer company={company} />
        </ScrollArea>
      </body>
    </html>
  );
}
