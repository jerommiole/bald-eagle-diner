import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Menu | Bald Eagle Diner - Classic 1950s Americana Cuisine",
  description:
    "Explore our menu of 1950s Americana classics! From juicy burgers and Philly cheesesteaks to milkshakes and hardshakes, savor the taste of nostalgia at Bald Eagle Diner.",
};

const Menu = () => {
  return (
    <div className="mx-auto lg:max-w-7xl p-6 lg:p-24">
      <div className="flex flex-col gap-6">
        <h3 className="font-superstar text-blue text-center text-2xl lg:text-3xl">
          Our Menu
        </h3>
        <Image
          src="/assets/gallery/menu1.jpg"
          alt="Menu Page 1"
          width={1530}
          height={1358}
          className="rounded-lg w-full h-full object-contain"
        />
        <Image
          src="/assets/gallery/menu2.jpg"
          alt="Menu Page 2"
          width={1530}
          height={1358}
          className="rounded-lg w-full h-full object-contain"
        />
        <Image
          src="/assets/gallery/menu3.jpg"
          alt="Menu Page 3"
          width={1530}
          height={1358}
          className="rounded-lg w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Menu;
