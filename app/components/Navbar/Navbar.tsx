import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import WhiteStar from "../WhiteStar";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Disclosure as="nav" className="bg-blue">
        <>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="hidden lg:flex space-x-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <WhiteStar key={index} />
                ))}
              </div>

              <div className="hidden lg:flex items-center gap-4 text-white">
                <Link
                  href="/#about"
                  className="hover:text-red px-3 py-4 text-15px font-medium space-links cursor-pointer"
                  aria-current="page"
                >
                  About Us
                </Link>
                <Link
                  href="/menu"
                  className="hover:text-red px-3 py-4 text-15px font-medium space-links"
                  aria-current="page"
                >
                  Our Menu
                </Link>
                <div className="relative -mb-24">
                  <Link href="/">
                    <Image
                      src="/assets/logo/bald-eagle-diner-logo.png"
                      alt="Bald Eagle Logo"
                      width={130}
                      height={130}
                      className="w-[130px] h-auto object-contain"
                    />
                  </Link>
                </div>
                <Link
                  href="/bed-special"
                  className="hover:text-red px-3 py-4 text-15px font-medium space-links"
                  aria-current="page"
                >
                  B.E.D. Special
                </Link>
                <Link
                  href="/#location"
                  className="hover:text-red px-3 py-4 text-15px font-medium space-links cursor-pointer"
                  aria-current="page"
                >
                  Location
                </Link>
              </div>

              <div className="hidden lg:flex space-x-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <WhiteStar key={index} />
                ))}
              </div>

              <div className="block lg:hidden">
                <Link href="/">
                  <Image
                    src="/assets/logo/bald-eagle-diner-logo.png"
                    alt="Bald Eagle Logo"
                    width={60}
                    height={60}
                    className="w-[60px] h-auto"
                  />
                </Link>
              </div>

              <div className="block lg:hidden">
                <Bars3Icon
                  className="block h-6 w-6 text-white"
                  aria-hidden="true"
                  onClick={() => setIsOpen(true)}
                />
              </div>

              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <Drawerdata />
              </Drawer>
            </div>
          </div>
        </>
      </Disclosure>
      <div className="border-t-4 border-b-4 border-red" />
      <div className="border-t-4 border-b-4 border-white" />
      <div className="border-t-4 border-b-4 border-red" />
      <div className="border-t-4 border-b-4 border-white" />
      <div className="border-t-4 border-b-4 border-red" />
    </>
  );
};

export default Navbar;
