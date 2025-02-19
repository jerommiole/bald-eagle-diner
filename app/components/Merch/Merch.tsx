import { merchItems } from "@/app/constants";
import Image from "next/image";
import React from "react";

const Merch = () => {
  return (
    <>
      <div className="border-t-[20px] border-aqua" />
      <div className="bg-pink">
        <div className="mx-auto lg:max-w-7xl">
          <div className="p-6 lg:p-24 gap-8 lg:gap-16 flex flex-col">
            <div className="flex flex-1 flex-col gap-4 text-center max-w-2xl mx-auto">
              <h2 className="font-superstar text-white text-2xl lg:text-5xl drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                Merch
              </h2>
              <p className="text-white text-md lg:text-lg">
                Show your love for Bald Eagle Diner with our exclusive
                merchandise! From cozy t-shirts to stylish accessories,
                we&#39;ve got something for everyone. Grab your favorite items
                today and wear your pride!
              </p>
              <p className="text-white text-lg md:text-lg lg:text-2xl font-medium">
                Available in Store
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
              {merchItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center p-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg"
                >
                  <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="m-2 pt-2 text-md md:text-2xl font-semibold text-blue">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Merch;
