import Banner from "./components/Hero/Banner";
import Companies from "./components/Companies/Companies";
import Mentor from "./components/Mentor/Mentor";
import Newsletter from "./components/Newsletter/Newsletter";
import Students from "./components/Students/Students";
import Tabs from "./components/Courses/Courses";
import Intro from "./components/Hero/Intro";

export default function Home() {
  return (
    <main>
      <Banner />
      <Intro />
      <Companies />
      <Tabs />
      <Mentor />
      <Students />
      <Newsletter />
    </main>
  );
}
