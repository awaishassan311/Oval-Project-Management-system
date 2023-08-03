import React from "react";
import badge from "../../assets/badge.png";
const Badges = () => {
  return (
    <div className=" mt-10">
      <div className="flex justify-center flex-col items-center mt-14">
        <img className="" src={badge} alt="Your Company"></img>
        <div className="flex p-10 flex-col justify-center items-center gap-1">
          <div className="text-black font-inter text-2xl font-bold leading-normal">
            <p>Tools erect walls</p>
          </div>
          <div className="text-black text-opacity-50 text-center font-inter text-base font-normal leading-normal">
            Collaboration is a struggle, when everybody uses a different app.
            <p className="mb-0.5">We have the solution for that.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
