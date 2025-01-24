import Image from "next/image";
import Link from "next/link";
import React from "react";

const Location = () => {
  return (
    <div
      id="location"
      className="grid grid-cols-1 lg:grid-cols-[40%,60%] p-6 lg:p-24 gap-8 lg:gap-16"
    >
      <div className="flex flex-col gap-4">
        <h3 className="font-superstar text-blue text-2xl lg:text-3xl">
          Our Location
        </h3>
        <div className="flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="rgba(244,32,42,1)"
          >
            <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
          </svg>
          <Link
            href="https://maps.app.goo.gl/ZwAWUW6reB8Q1ECE8"
            className="text-base lg:text-lg "
            target="_blank"
          >
            89 Tamaki Drive, Mission Bay, Auckland 1071
          </Link>
        </div>
        <p className="font-bold lg:text-lg text-blue">Operating Hours</p>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex gap-1 items-center">
            <p className="text-md lg:text-lg">Monday</p>
          </div>
          <p className="text-md lg:text-lg">11:30 AM - 8:30 PM</p>
          <div className="flex gap-1 items-center">
            <p className="text-md lg:text-lg">Tuesday</p>
          </div>
          <p className="text-md lg:text-lg">11:30 AM - 8:30 PM</p>
          <div className="flex gap-1 items-center">
            <p className="text-md lg:text-lg">Wednesday</p>
          </div>
          <p className="text-md lg:text-lg">11:30 AM - 8:30 PM</p>
          <div className="flex gap-1 items-center">
            <p className="text-md lg:text-lg">Thursday</p>
          </div>
          <p className="text-md lg:text-lg">11:30 AM - 8:30 PM</p>
          <div className="flex gap-1 items-center">
            <p className="text-md lg:text-lg">Friday</p>
          </div>
          <p className="text-md lg:text-lg">11:30 AM - 9:00 PM</p>
          <div className="flex gap-1 items-center">
            <p className="text-md lg:text-lg">Saturday</p>
          </div>
          <p className="text-md lg:text-lg">11:00 AM - 9:00 PM</p>
          <div className="flex gap-1 items-center">
            <p className="text-md lg:text-lg">Sunday</p>
          </div>
          <p className="text-md lg:text-lg">11:00 AM - 8:30 PM</p>
        </div>
      </div>

      <div className="hidden lg:flex lg:items-center justify-center">
        <Image
          src="/assets/gallery/bed-location.jpg"
          alt="Map"
          width={530}
          height={358}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Location;
