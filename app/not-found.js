/** @format */

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default async function NotFound() {
  return (
    <div class="bg-primary/10 h-screen justify-center">
      <center class="mt-24 m-auto animate-bounce">
        <Image
          src={"/not-found.svg"}
          alt={"404 not found"}
          width={500}
          height={500}
        />
        <div class=" tracking-widest mt-4">
          <span class="text-gray-500 text-6xl block">
            <span>4 0 4</span>
          </span>
          <span class="text-gray-500 text-xl">
            Sorry, We couldn't find what you are looking for!
          </span>
        </div>
      </center>
      <center class="mt-6">
        <Button>
          <Link
            href="/"
            class="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
          >
            Return Home
          </Link>
        </Button>
      </center>
    </div>
  );
}
