import React from "react";

const Herosection = () => {
  return (
    <div className="flex justify-center px-4 mt-100">
      <div className="w-full text-black text-center font-rubik font-medium text-[36px] md:text-[32px]">
        <p>Maintain, Map, and Master</p>
        Your Comprehensive Tool for{" "}
        <span className="bg-orange-300 p-2 border rounded">
          School Facility
        </span>
        <p>Career.</p>
        <p className="text-black mt-10 font-rubik font-medium text-opacity-50 md:text-opacity-60 text-center md:text-[20px]">
          Build your own workspace to replace isolated tools
          <br />
          and bring everyone together.
        </p>
        <div>
          <button className="mt-10 text-[18px] md:text-[16px] font-inter bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-500 rounded">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
