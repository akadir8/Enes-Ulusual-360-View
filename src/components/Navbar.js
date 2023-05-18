import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className=" w-full h-screen">
        <div className="shadow-md w-full fixed top-0 left-0">
          <div
            id="navBar"
            className="md:flex items-center justify-center py-4 md:px-10 px-7"
          >
            <div className="font-mono text-2xl cursor-pointer flex items-center font-font text-gray-800">
                <span>Enes Ulusal 360° View</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
