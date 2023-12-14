import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleContactClick = () => {
    setShowOverlay(true);
  };

  const copyEmailToClipboard = (email) => {
    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();

    // Copy the email to the clipboard
    document.execCommand("copy");

    // Remove the temporary input
    document.body.removeChild(tempInput);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="h-16 mb-0 shadow-xl flex justify-between items-center bg-black text-white">
      <Link to="/" className="flex items-center mx-6">
        <img src="./medline-logo.svg" alt="medline-logo" className="h-14" />
        <h1 className="ml-2 h-14 py-3 text-3xl font-bold">MEDLINE</h1>
      </Link>
      <div className="flex justify-end items-center mx-12">
        <ul className="flex space-x-8">
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <button onClick={handleContactClick}>Contact Us</button>
          </li>
        </ul>
      </div>

      {showOverlay && (
        <div
          className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-lg"
          onClick={closeOverlay}
        >
          <div className="bg-white p-4 rounded-lg text-black">
            <div className="text-2xl">
              <p>Medline Pharmaceuticals Pvt. Ltd.</p>
              <p>R. Sundara Raman, Managing Director.</p>
              <p>Phone: +91-9841631918</p>
              <div className="border border-solid border-black p-1 rounded-xl my-5">
                <p>
                  <span
                    onClick={() => {
                      copyEmailToClipboard("med_line@yahoo.co.in");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <p className="text-center text-black">
                      med_line@yahoo.co.in
                    </p>
                  </span>
                </p>
              </div>
              <div className="border border-solid border-black p-1 rounded-xl">
                <a
                  href="https://www.linkedin.com/services/page/b691aa326191a79507/"
                  className="border-black"
                  target="_blank" // Add this to open in a new tab
                >
                  <p className="text-center">Check out our LinkedIn Profile</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
