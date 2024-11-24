/** @format */

import AboutUs from "@/components/home/about-us";
import PageDiscription from "@/components/home/discription";
import Faq from "@/components/home/faq";

import HeroForm from "@/components/home/HeroWithForm";
import Team from "@/components/home/team";
import WhyUs from "@/components/home/why-us";

import { Separator } from "@/components/ui/separator";
export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/destinations`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        api_key: process.env.NEXT_PUBLIC_API_KEY, // If needed for validation
      },
    }
  );
  const destinations = await response.json();

  return (
    <>
      <HeroForm destinations={destinations} />
      <PageDiscription />
      <Separator className={"my-20"} />
      <Faq />
      {/* <Promotions /> */}
      <Separator className={"my-20"} />
      <WhyUs />
      <Separator className={"my-20"} />
      <Team />
      <Separator className={"my-20"} />
      <AboutUs />
      <Separator className={"my-20"} />
    </>
  );
}
