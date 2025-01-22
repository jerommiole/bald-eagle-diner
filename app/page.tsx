import Banner from "./components/Hero/Banner";
import Marquee from "./components/Marquee/Marquee";
import Mentor from "./components/Mentor/Mentor";
import Newsletter from "./components/Newsletter/Newsletter";
import Students from "./components/Students/Students";
import Tabs from "./components/Courses/Courses";
import Intro from "./components/Hero/Intro";
import Gallery from "./components/Gallery/Gallery";

export default function Home() {
  return (
    <main>
      <Banner />
      <Intro />
      <Marquee />
      <Gallery />
      <Tabs />
      <Mentor />
      <Students />
      <Newsletter />
    </main>
  );
}
