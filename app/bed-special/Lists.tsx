"use client";

import Image from "next/image";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { categories, menuItems } from "../constants";

const Lists = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryFromUrl = searchParams.get("filter") || "all";
  const [selectedCategory, setSelectedCategory] =
    React.useState(categoryFromUrl);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);

    const params = new URLSearchParams(searchParams);

    if (categoryId === "all") {
      params.delete("filter");
    } else {
      params.set("filter", categoryId);
    }

    router.push(`/bed-special?${params.toString()}`);
  };

  const filteredItems = React.useMemo(() => {
    if (selectedCategory === "all") {
      return menuItems;
    }
    return menuItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-grey500">
      <section className="mx-auto lg:max-w-7xl p-6 lg:p-24">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 lg:px-6 lg:py-4 rounded-md font-superstar md:text-3xl text-lg lg:text-4xl transition-colors
                  ${
                    selectedCategory === category.id
                      ? "bg-red-600 text-white bg-red"
                      : "bg-gray-100 text-blue hover:bg-white"
                  }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group p-4 bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 pt-2 text-md md:text-lg font-semibold text-navy-900 text-blue text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lists;
