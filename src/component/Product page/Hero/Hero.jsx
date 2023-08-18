import React from "react";
import badge from "../../../assets/hero.svg";
const Hero = () => {
  return (
    <div className="flex justify-center flex-col item-center px-4 mt-10 mb-10">
      <div className="w-full text-black text-center font-rubik font-medium text-[36px] md:text-[32px]">
        <p>Make your project & tasks</p> <p> well planned</p>
        <p className="text-black mt-10 font-rubik font-medium text-opacity-50 md:text-opacity-60 text-center md:text-[20px]">
          Plan, track, and do all your work in one place.
          <br />
          Steer the ship together with your team.
        </p>
        <div>
          <button className="mt-10 text-[18px] md:text-[16px] font-inter bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-500 rounded">
            Contact us
          </button>
        </div>
      </div>
      <div className=" mt-2 px-4">
        <div className="flex justify-center flex-col items-center mt-14">
          <img className=" w-[75%]" src={badge} alt="Your Company"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
