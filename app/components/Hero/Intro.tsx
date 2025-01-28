import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="mx-auto lg:max-w-7xl">
      <div
        id="about"
        className="grid grid-cols-1 lg:grid-cols-[30%,70%] p-6 lg:p-24 gap-8 lg:gap-16"
      >
        <div className="hidden lg:flex lg:items-center justify-center">
          <Image
            src={"/assets/logo/bed-logo-red-distress.png"}
            alt="B.E.D. Red Logo"
            width={400}
            height={400}
            priority
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-superstar text-blue text-2xl lg:text-3xl">
            Step Back in Time to the 1950s
          </h3>
          <p className="text-md lg:text-lg">
            Travel back to an era of big, juicy burgers, kids slurping on
            milkshakes, and classic rock &rsquo;n&rsquo; roll playing from the
            jukebox. At Bald Eagle Diner, we bring the charm of the 1950s to
            life with a menu full of Americana classics. From Chicken and
            Waffles to Philly Cheese Steaks and Mac &rsquo;n&rsquo; Cheese,
            every bite is a nostalgic journey.
          </p>
          <p className="text-md lg:text-lg">
            For the big kids, we serve Hardshakes (alcoholic) alongside our
            Milkshakes, Thickshakes, and over-the-top Freakshakes that everyone
            can enjoy. The jukebox keeps the vibe alive with timeless Rock
            &rsquo;n&rsquo; Roll hits and American rock through the decades. Who
            deserves a good time at B.E.D.? You do!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
