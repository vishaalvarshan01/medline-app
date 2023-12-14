import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-bounce w-[100px]">
        <img src="./medline-logo-white.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Loader;
