import Link from "next/link";
import RedStar from "../RedStar";

const Banner = () => {
  return (
    <main className="banner-image">
      <div className="relative p-6 lg:p-28 md:p-12 mx-auto lg:max-w-7xl">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="text-3xl md:text-7xl mb-4 text-white">
              <span className="text-lg md:text-2xl">Welcome to &nbsp;</span>
              <div className="font-superstar flex items-center justify-center gap-2">
                <RedStar />
                <span>BALD</span>
                <RedStar />
                <span>EAGLE</span>
                <RedStar />
                <span>DINER</span>
                <RedStar />
              </div>
            </h1>
            <p className="text-lg md:text-2xl text-white">
              A Taste of Classic Americana!
            </p>
          </div>

          <div className="flex justify-center p-6">
            <Link
              href="/menu"
              className="bg-red hover:bg-blue text-white text-center font-bold py-4 px-6 rounded w-full md:w-auto"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
