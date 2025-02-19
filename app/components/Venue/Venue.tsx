import Link from "next/link";
import React from "react";
import Youtube from "./Youtube";

const Venue = () => {
  return (
    <section className="mx-auto lg:max-w-7xl">
      <div className="p-6 lg:p-24 gap-8 lg:gap-16 flex flex-col">
        <div className="flex flex-1 flex-col gap-4 text-center max-w-3xl mx-auto">
          <h2 className="font-superstar text-2xl lg:text-5xl text-blue">
            Venue for Hire
          </h2>
          <p className="text-md lg:text-lg">
            Looking for a unique, retro-style location for your next event? Bald
            Eagle Diner is the perfect setting for music videos, photoshoots,
            private parties, and corporate gatherings. Step into a vibrant 1950s
            Americana atmosphere complete with neon lights, classic diner
            booths, and a jukebox playing timeless hits.
          </p>
          <p className="mt-4 text-lg md:text-2xl lg:text-2xl font-medium text-red">
            As Featured In
          </p>
          <p>
            Our diner has been the backdrop for incredible music videos, adding
            a nostalgic touch to creative projects. Check out these artists who
            filmed right here at B.E.D.!
          </p>
        </div>

        <Youtube />

        <div className="flex flex-1 flex-col gap-4 text-center lg:max-w-2xl mx-auto rounded-2xl p-6 bg-aqua">
          <p className="text-lg md:text-2xl lg:text-2xl font-medium text-white">
            Book Your Event Today!
          </p>
          <p className="max-w-2xl mx-auto text-white">
            Whether it&apos;s a themed party or a professional shoot, we&apos;ve
            got you covered. Get in touch to discuss how we can bring your
            vision to life at Bald Eagle Diner.
          </p>
          <div className="flex justify-center p-2">
            <Link
              href="mailto:info@baldeaglediner.co.nz"
              className="bg-blue hover:bg-white hover:text-blue text-white text-center py-4 px-6 rounded w-full md:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
