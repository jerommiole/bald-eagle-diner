import { Metadata } from "next";
import Banner from "./components/Hero/Banner";
import Marquee from "./components/Marquee/Marquee";
import Intro from "./components/Hero/Intro";
import Gallery from "./components/Gallery/Gallery";
import Location from "./components/Location/Location";
import Merch from "./components/Merch/Merch";
import Venue from "./components/Venue/Venue";

export const metadata: Metadata = {
  title: "Bald Eagle Diner | A Taste of Classic Americana!",
  description:
    "Step back in time at Bald Eagle Diner! Enjoy classic 1950s Americana cuisine, milkshakes, and retro vibes in Auckland. Perfect for dining, events, and parties!",
  keywords: "Bald Eagle Diner, Diner, Restaurant, Menu, Location",
  authors: [{ name: "Jerom Miole" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main>
      <Banner />
      <Intro />
      <Marquee />
      <Gallery />
      <Marquee />
      <Venue />
      <Merch />
      <Location />
    </main>
  );
}
