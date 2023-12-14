import React, { useState } from "react";
import axios from "axios";

import { supabase } from "../supabaseClient";

const OverlayForm = ({ onClose, productId }) => {
  const [closeForm, setCloseForm] = useState(false);

  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Name:", formData.name);
    console.log("Phone:", formData.phone);
    console.log("Email:", formData.email);

    const { error } = await supabase.from("customerinfo").insert({
      name: formData.name,
      number: formData.phone,
      email: formData.email,
      productid: productId,
    });
    if (!error) {
      setCloseForm(true);
      setError(false);
      // axios
      //   .post("http://localhost:3000", {
      //     name: formData.name,
      //     number: formData.phone,
      //     email: formData.email,
      //     productid: productId,
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
    if (error) {
      setError(true);
      alert("Something went wrong , try again later.");
    }
    // onClose(); // Close the overlay form
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg">
      {closeForm ? (
        error ? (
          <div className="bg-white w-96 p-6 rounded-lg relative shadow-xl">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <img width="30" height="30" src="./closeIcon.png" alt="close" />
            </button>
            <h2 className="text-2xl font-bold mb-4">
              Sorry something went wrong , please try again later
            </h2>
          </div>
        ) : (
          <div className="bg-white w-96 p-6 rounded-lg relative shadow-xl">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <img width="30" height="30" src="./closeIcon.png" alt="close" />
            </button>
            <h2 className="text-2xl font-bold mb-4">
              Awesome , we will contact you soon !
            </h2>
          </div>
        )
      ) : (
        <div className="bg-white w-96 p-6 rounded-lg relative shadow-xl">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <img width="30" height="30" src="./closeIcon.png" alt="close" />
          </button>
          <h2 className="text-2xl font-bold mb-4">
            We'll contact you . Just give your details
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Add your form fields here */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                placeholder="Tell us your name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-900"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-600">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Contact you through your phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-900"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="text"
                placeholder="Contact you through your email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-900"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-slate-800 hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-lg border-solid border-2 shadow-xl"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OverlayForm;
