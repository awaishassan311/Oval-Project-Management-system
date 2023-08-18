import React from "react";
import badge from "../../../assets/hero.svg";
const Badges = () => {
  return (
    <div className=" mt-10 px-4">
      <div className="flex justify-center flex-col items-center mt-14">
        <img className=" w-[75%]" src={badge} alt="Your Company"></img>
      </div>
    </div>
  );
};

export default Badges;
