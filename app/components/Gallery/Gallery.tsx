import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl p-6 lg:p-24">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/image1.jpg"}
            alt="B.E.D. Red Logo"
            fill
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:col-start-3 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/image2.jpg"}
            alt="B.E.D. Red Logo"
            fill
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:col-start-4 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/image3.jpg"}
            alt="B.E.D. Red Logo"
            fill
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:row-start-2 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/image2.jpg"}
            alt="B.E.D. Red Logo"
            fill
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:row-start-2 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/image3.jpg"}
            alt="B.E.D. Red Logo"
            fill
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:col-span-2 lg:row-start-2 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/image1.jpg"}
            alt="B.E.D. Red Logo"
            fill
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:col-span-2 lg:row-start-3 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/image1.jpg"}
            alt="B.E.D. Red Logo"
            fill
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:col-start-3 lg:row-start-3 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/image2.jpg"}
            alt="B.E.D. Red Logo"
            fill
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:col-start-4 lg:row-start-3 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/image3.jpg"}
            alt="B.E.D. Red Logo"
            fill
            className="w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
