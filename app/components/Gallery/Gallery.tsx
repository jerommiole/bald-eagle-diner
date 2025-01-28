import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  return (
    <div className="mx-auto lg:max-w-7xl p-6 lg:p-24">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="lg:col-span-2 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/img1.jpg"}
            alt="Burger"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:col-start-3 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/img2.jpg"}
            alt="B.E.D. Red Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:col-start-4 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/img3.jpg"}
            alt="B.E.D. Red Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:row-start-2 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/img4.jpg"}
            alt="B.E.D. Red Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:row-start-2 relative h-[300px] w-full overflow-hidden">
          <Link
            href="/menu"
            className="bg-blue text-white rounded-lg text-center h-full w-full items-center justify-center flex"
          >
            <span className="text-3xl md:text-2xl lg:text-5xl font-superstar">
              Explore our Menu
            </span>
          </Link>
        </div>
        <div className="lg:col-span-2 lg:row-start-2 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/img6.jpg"}
            alt="B.E.D. Red Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:col-span-2 lg:row-start-3 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/img7.jpg"}
            alt="B.E.D. Red Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:col-start-3 lg:row-start-3 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/img8.jpg"}
            alt="B.E.D. Red Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:col-start-4 lg:row-start-3 relative h-[300px] w-full overflow-hidden">
          <Image
            src={"/assets/gallery/img9.jpg"}
            alt="B.E.D. Red Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
