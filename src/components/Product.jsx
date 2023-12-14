import React, { useState } from "react";
import OverlayForm from "./OverlayForm";

const Product = ({ product }) => {
  const [showForm, setShowForm] = useState(false);

  const getUserDetails = async () => {
    // Your getUserDetails function logic here
    // When you want to show the form, set showForm to true
    setShowForm(true);
  };

  const closeForm = () => {
    // Function to close the form
    setShowForm(false);
  };

  return (
    <div className="max-w-sm rounded-b-3xl overflow-hidden shadow-lg h-[500px] flex flex-col">
      <img
        src="https://www.cliffrailwaylynton.co.uk/wp-content/uploads/2018/01/250x250-Placeholder.png"
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2 break-words">{product.name}</div>
        <div>
          {product.composition.map((comp, index) => (
            <div
              className="text-gray-700 text-base font-light overflow-y-auto"
              key={index}
            >
              <p>
                {comp}
                {index !== product.composition.length - 1 ? "," : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 pb-4 text-gray-700 text-base flex justify-between items-end">
        <span className="">{product.size}</span>
        <button
          onClick={getUserDetails}
          className="bg-slate-800 text-white hover:text-slate-900 hover:bg-red-300 font-bold py-1.5 px-2 rounded-lg shadow-xl"
        >
          Get a Quote
        </button>
      </div>
      {showForm && (
        <>
          {/* Background overlay */}
          <div className="blur-sm"></div>
          {/* Overlay form */}
          <OverlayForm onClose={closeForm} productId={product.id} />
        </>
      )}
    </div>
  );
};

export default Product;
