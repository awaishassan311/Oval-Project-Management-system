import React from "react";
import badge from "../../../assets/hero.svg";
const Badges = () => {
  return (
    <div className=" mt-14 px-4">
      <div className="flex justify-center flex-col items-center  ">
        <div className="flex justify-center w-full">
          <img
            className="h-[180px] lg:h-[800px]"
            src={badge}
            alt="Your Company"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Badges;
