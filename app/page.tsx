import { Metadata } from "next";
import Banner from "./components/Hero/Banner";
import Marquee from "./components/Marquee/Marquee";
import Intro from "./components/Hero/Intro";
import Gallery from "./components/Gallery/Gallery";
import Location from "./components/Location/Location";
import Merch from "./components/Merch/Merch";

export const metadata: Metadata = {
  title: "Bald Eagle Diner | A Taste of Classic Americana!",
  description:
    "Welcome to Bald Eagle Diner. Enjoy our delicious menu, great atmosphere, and classic American dining experience.",
  viewport: "width=device-width, initial-scale=1",
  keywords: "Bald Eagle Diner, Diner, Restaurant, Menu, Location",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://baldeaglediner.co.nz"),

  twitter: {
    card: "summary",
    site: "@baldeaglediner",
    title: "Bald Eagle Diner | A Taste of Classic Americana!",
    description:
      "Welcome to Bald Eagle Diner. Enjoy our delicious menu, great atmosphere, and classic American dining experience.",
    images: ["bed-thumb.jpg"],
  },

  openGraph: {
    images: ["bed-thumb.jpg"],
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
      <Location />
      <Merch />
    </main>
  );
}
