/** @format */

import { Mail, MapPin, Phone, PhoneIcon } from "lucide-react";

const Team = () => {
  return (
    <section className="px-8 lg:px-16  my-20">
      <div className="container  lg:w-3/4">
        <div className="mb-14">
          <span className="text-sm font-semibold">Reach Us</span>
          <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
            Speak with Our Friendly Team
          </h1>
          <p className="text-lg text-muted-foreground">
            We&apos;d love to assist you. Fill out the form or drop us an email.
          </p>
        </div>
        <div className="grid gap-10  md:grid-cols-3">
          <div className="grid grid-cols-6 md:grid-cols-1">
            <div className="mb-5 flex size-16 col-span-1 items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </div>
            <h3 className="mb-2 text-start text-xl flex items-center   font-semibold text-primary col-span-5 md:col-span-1">
              Email Us
            </h3>
            <p className="text-muted-foreground text-ghost col-span-6 md:col-span-1">
              Whatever is in your mind just reach us and our passionate team
              will help you.
            </p>
            <p className="font-semibold hover:underline col-span-6 md:col-span-1">
              abc@example.com
            </p>
          </div>
          <div className="grid grid-cols-6 md:grid-cols-1">
            <div className="mb-5 flex size-16 col-span-1 items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </div>
            <h3 className="mb-2 text-start text-xl flex items-center   font-semibold text-primary col-span-5 md:col-span-1">
              Meet Us
            </h3>
            <p className="text-muted-foreground text-ghost col-span-6 md:col-span-1">
              Meet us at the location and find cheapest prises to your
              destinations.
            </p>
            <p className="font-semibold hover:underline col-span-6 md:col-span-1">
              this is my location
            </p>
          </div>
          <div className="grid grid-cols-6 md:grid-cols-1">
            <div className="mb-5 flex size-16 col-span-1 items-center justify-center rounded-full bg-accent">
              <PhoneIcon className="h-6 w-auto" />
            </div>
            <h3 className="mb-2 text-start text-xl flex items-center   font-semibold text-primary col-span-5 md:col-span-1">
              Call Us
            </h3>
            <p className="text-muted-foreground text-ghost col-span-6 md:col-span-1">
              Our team is ready to assist you with any query you might have.
            </p>
            <p className="font-semibold hover:underline col-span-6 md:col-span-1">
              +91 2313 31231 3123
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
