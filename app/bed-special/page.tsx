import React, { Suspense } from "react";
import HeroBED from "./Hero";
import Lists from "./Lists";
import { Metadata } from "next";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Our Menu | Bald Eagle Diner - Classic 1950s Americana Cuisine",
  description:
    "Explore our menu of 1950s Americana classics! From juicy burgers and Philly cheesesteaks to milkshakes and hardshakes, savor the taste of nostalgia at Bald Eagle Diner.",
  authors: [{ name: "Jerom Miole" }],
  keywords: "Bald Eagle Diner, Diner, Restaurant, Menu, Location",
};

const page = () => {
  return (
    <>
      <HeroBED />
      <Suspense fallback={<Loading />}>
        <Lists />
      </Suspense>
    </>
  );
};

export default page;
