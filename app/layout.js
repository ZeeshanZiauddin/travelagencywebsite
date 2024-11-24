/** @format */

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { ScrollArea } from "@/components/ui/scroll-area";
import WhatsappBtn from "@/components/home/whatsapp-btn";
import Head from "next/head";
import { getQuery } from "@/utils/api";

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

// Default company metadata
const defaultCompany = {
  logo: null,
  title: "Cheap Flights to Sierra Leone",
  description: `At CheapFlightsToSierraLeone, we specialize in providing
              affordable, reliable flight services between the UK and Sierra
              Leone. Our mission is to make your travel experience seamless and
              cost-effective, whether you're heading to Sierra Leone for
              business, leisure, or to visit family.`,
  seo_keywords: "cheap flights, sierra leone, travel",
};

// Define a server function to fetch metadata with fallback to default values
async function fetchCompanyMetadata() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/companies/${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch company metadata, status:", res.status);
      return null; // Return null if fetch fails
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching company metadata:", error);
    return null; // Return null if an error occurs
  }
}

// Metadata API to dynamically generate metadata
export async function generateMetadata() {
  const company = await fetchCompanyMetadata();

  // Fallback to default metadata if company metadata is not available
  return {
    title: company?.title ?? defaultCompany.title,
    description: company?.description ?? defaultCompany.description,
    keywords: company?.seo_keywords ?? defaultCompany.seo_keywords,
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function RootLayout({ children }) {
  const company = await fetchCompanyMetadata();

  // Use the fetched data or fall back to defaults if the fetch failed
  const companyData = company ?? defaultCompany;

  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" href="favicon.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollArea className="h-[100vh] mw-[100vh] rounded-md border">
          <Navbar company={companyData} />
          <div className="container mx-auto md:px-10">
            {children}
            <WhatsappBtn />
          </div>
          <Footer company={companyData} />
        </ScrollArea>
      </body>
    </html>
  );
}
