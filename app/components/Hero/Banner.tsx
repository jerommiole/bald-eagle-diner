import RedStar from "../RedStar";

const Banner = () => {
  return (
    <main className="banner-image">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
          <div className="text-center">
            <h1 className="text-6xl mb-4 text-white">
              <span className="text-2xl">Welcome to &nbsp;</span>
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
            <p className="text-2xl mb-8 text-white">
              A Taste of Classic Americana!
            </p>
          </div>

          <div className="flex justify-center mt-10 pt-6">
            <button className="bg-red hover:bg-blue text-white font-bold py-4 px-6 rounded">
              Explore Our Menu
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
