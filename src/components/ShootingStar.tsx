import React from "react";
import { Meteors } from "./Meteors.tsx";

export const ShootingStar = () => {
  return (
    <div className="leetcard-container flex items-center justify-center h-[40rem] w-full">
      <div className="leetcard relative  w-3/4 ">
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> */}
        <div className="leetcard-background relative shadow-xl bg-gray-900 border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start">


          <img id="leetimg"
            src="https://leetcard.jacoblin.cool/chinm4y?theme=dark&amp;ext=contest"
            className="h-full w-full"
            alt="LeetCard"
          />

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};
