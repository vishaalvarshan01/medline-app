import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { categoryState } from "../context/state";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryState);

  const handleItemClick = (category) => {
    setSelectedCategory(category);
    console.log('from categories : ', selectedCategory)
  };

  return (
    <div className="shadow-xl mt-6 border-solid border-2 rounded-xl lg:w-[18rem] h-[164px]">
      <ul className="list-inside list-disc">
        <li
          className={`flex items-center py-2 pl-6 pr-3 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 ${
            selectedCategory === "All" ? "bg-gray-200 rounded-t-md" : ""
          }`}
          onClick={() => handleItemClick("All")}
        >
          <input
            type="radio"
            className="absolute left-0 opacity-0 cursor-pointer h-5 w-5"
            id="tablet"
            name="productType"
          />
          <label htmlFor="tablet" className="ml-2 text-gray-900 cursor-pointer">
            All
          </label>
        </li>
        <li
          className={`relative flex items-center py-2 pl-6 pr-3 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 ${
            selectedCategory === "Tablets" ? "bg-gray-200" : ""
          }`}
          onClick={() => handleItemClick("Tablets")}
        >
          <input
            type="radio"
            className="absolute left-0 opacity-0 cursor-pointer h-5 w-5"
            id="tablet"
            name="productType"
          />
          <label htmlFor="tablet" className="ml-2 text-gray-900 cursor-pointer">
            Tablets
          </label>
        </li>
        <li
          className={`relative flex items-center py-2 pl-6 pr-3 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 ${
            selectedCategory === "Liquids" ? "bg-gray-200" : ""
          }`}
          onClick={() => handleItemClick("Liquids")}
        >
          <input
            type="radio"
            className="absolute left-0 opacity-0 cursor-pointer h-5 w-5"
            id="liquid"
            name="productType"
          />
          <label htmlFor="liquid" className="ml-2 text-gray-900 cursor-pointer">
            Liquids
          </label>
        </li>
        <li
          className={`relative flex items-center py-2 pl-6 pr-3 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 ${
            selectedCategory === "Capsules" ? "bg-gray-200" : ""
          }`}
          onClick={() => handleItemClick("Capsules")}
        >
          <input
            type="radio"
            className="absolute left-0 opacity-0 cursor-pointer h-5 w-5"
            id="capsule"
            name="productType"
          />
          <label
            htmlFor="capsule"
            className="ml-2 text-gray-900 cursor-pointer"
          >
            Capsules
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
