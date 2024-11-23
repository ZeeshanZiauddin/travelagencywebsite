/** @format */

import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  MailIcon,
  MapPin,
  PhoneCall,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer({ company }) {
  const logo = process.env.NEXT_PUBLIC_STORAGE_BASE_URL + company.logo;
  return (
    <footer className=" pt-0 rounded-xl bg-primary/5">
      <div className="container px-20 mx-auto py-2">
        <Separator className="my-6" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <Image
              src={logo}
              width={300}
              height={100}
              alt="Cheap flights to siere leone"
            ></Image>
            <h2 className="max-w-lg text-xl font-semibold tracking-tight text-gray-600 my-2 ">
              {company.title}
            </h2>
            <p className="text-gray-400 text w-[60ch]">
              {company.description}
              {/* At CheapFlightsToSierraLeone, we specialize in providing
              affordable, reliable flight services between the UK and Sierra
              Leone. Our mission is to make your travel experience seamless and
              cost-effective, whether you're heading to Sierra Leone for
              business, leisure, or to visit family */}
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-600">Quick Links</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Button variant="link" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="/contact-us">Contact us</Link>
              </Button>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Quick Links</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Button variant="link" asChild>
                <Link href="/">Terms & conditions</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="/about">Privacy Policy</Link>
              </Button>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Quick Links</p>
            <div className="flex flex-col items-start mt-3 space-y-2">
              <div className="flex items-center">
                <span className="rounded-full bg-secondary p-1 text-gray-600">
                  <MailIcon size={18} />
                </span>
                <span className="ms-1 text-primary">
                  {" "}
                  {company.email ?? "email.com"}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start mt-1 space-y-2">
              <div className="flex items-center">
                <span className="rounded-full bg-secondary p-1 text-gray-600">
                  <PhoneCall size={18} />
                </span>
                <span className="ms-1 text-primary">
                  {" "}
                  {company.phone ?? "+12121212121212"}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start mt-1 space-y-2">
              <div className="flex items-center">
                <span className="rounded-full bg-secondary p-1 text-gray-600">
                  <MapPin size={18} />
                </span>
                <span className="ms-1 text-primary">
                  {" "}
                  {company.location ?? "COmpany location"}
                </span>
              </div>
            </div>

            <p className="font-semibold text-gray-600 mt-4">Follow Us</p>

            <div className="flex mt-1 space-x-1 p-0">
              <Button
                variant="ghost"
                size="icon"
                className={"text-blue-600"}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={"text-violet-500"}
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={"text-pink-700"}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={"text-red-500"}
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <Separator className="mt-6" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cheap Flights to Siere Leone. All
            rights reserved.
          </p>

          <div className="flex mt-3 space-x-4 sm:mt-0">
            <Button
              variant="link"
              asChild
              className="text-xs text-muted-foreground"
            >
              <Link href="#">Terms &amp; Conditions</Link>
            </Button>
            <Button
              variant="link"
              asChild
              className="text-xs text-muted-foreground"
            >
              <Link href="#">Privacy Policy</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
