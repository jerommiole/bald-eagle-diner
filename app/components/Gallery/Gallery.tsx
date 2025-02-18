import { galleryItems } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  return (
    <div className="mx-auto lg:max-w-7xl p-6 lg:p-24">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`relative h-[300px] w-full overflow-hidden rounded-xl ${
              item.span || ""
            }`}
          >
            <Link href={item.link} className="block h-full w-full relative">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
