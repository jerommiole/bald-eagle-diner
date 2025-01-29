import Image from "next/image";
import React from "react";

const Merch = () => {
  return (
    <>
      <div className="border-t-[20px] border-aqua" />
      <div className="bg-pink">
        <div className="mx-auto lg:max-w-7xl ">
          <div className=" p-6 lg:p-24 gap-8 lg:gap-16 flex flex-col">
            <div className="flex flex-1 flex-col gap-4 text-center">
              <h2 className="font-superstar text-white text-2xl lg:text-3xl">
                Merch
              </h2>
              <p className="text-white text-md lg:text-lg">
                Show your love for Bald Eagle Diner with our exclusive
                merchandise! From cozy t-shirts to stylish accessories,
                we&#39;ve got something for everyone. Grab your favorite items
                today and wear your pride!
              </p>
              <p className="text-white text-lg md:text-2xl lg:text-3xl font-medium">
                AVAILABLE IN STORE
              </p>
            </div>

            <div className="flex flex-1 flex-col lg:flex-row items-center gap-6 justify-center">
              <div>
                <Image
                  src="/assets/gallery/shirt1.jpg"
                  alt="BED Shirt 1"
                  width={400}
                  height={358}
                  className="rounded-lg w-full h-full object-contain"
                />
              </div>
              <div>
                <Image
                  src="/assets/gallery/shirt3.jpg"
                  alt="BED Shirt 3"
                  width={400}
                  height={358}
                  className="rounded-lg w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Merch;
