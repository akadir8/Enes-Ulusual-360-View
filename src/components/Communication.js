import React from "react";
import { SocialMedia } from "./SocialMedia";

export const Communication = () => {
  return (
    <>
      <div className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-10">
        <div className="container mx-auto">
          <div className="w-full bg-slate-200 h-[76px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-black ">
          <SocialMedia/>
          </div>
        </div>
      </div>
    </>
  );
};
