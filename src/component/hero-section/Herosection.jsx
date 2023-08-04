import React from "react";

const Herosection = () => {
  return (
    <div class="flex justify-center mt-10">
      <div className="w-full text-black text-center text-[36px] ">
        <p>Maintain, Map, and Master</p>
        Your Comprehensive Tool for{" "}
        <span className="bg-orange-300">School Facility</span>
        <p>Career.</p>
        <p className="text-black mt-10 text-opacity-50 text-center">
          Build your own workspace to replace isolated tools
          <br />
          and bring everyone together.
        </p>
        <div>
          <button className=" mt-10 text-[18px] py-2 px-6 bg-[#FF6846] text-white rounded-lg  border border-black border-opacity-40">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
