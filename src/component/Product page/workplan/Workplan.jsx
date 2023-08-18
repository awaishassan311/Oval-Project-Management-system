import React from "react";
import badge from "../../../assets/hero.svg";
import badge2 from "../../../assets/workspace1.svg";
const Workplan = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-14">
      <div className="w-full text-black text-center font-rubik font-medium text-[36px] md:text-[32px]">
        <p>Keep your work bundled </p>

        <span className="bg-orange-300 p-2 border rounded">together.</span>
        <p className="text-black mt-10 font-rubik font-medium text-opacity-50 md:text-opacity-60 text-center md:text-[20px]">
          We belive in autonomous teams that own their <br />
          work and their piece of workspace.
        </p>
      </div>

      <div className="flex justify-center flex-col w-full items-center mt-8">
        <img className=" w-[75%]" src={badge} alt="Your Company"></img>
      </div>

      <div className=" flex flex-row justify-center items-center gap-10 ">
        <div className="flex flex-col w-[50%] justify-center items-start">
          <div className="flex justify-center flex-col w-full items-center">
            <img
              className=" w-[100%] h-[100%]"
              src={badge2}
              alt="Your Company"
            ></img>
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-xl font-rubik font-bold ">
              Dedicated success manager
            </p>
            <p className="text-[12px] font-inter text-opacity-50 font-normal ">
              Your own customer success manager to help onboard large team and
              create custom workflows.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[50%] justify-center items-start">
          <div className="flex justify-center flex-col w-full items-center">
            <img
              className=" w-[100%] h-[100%]"
              src={badge2}
              alt="Your Company"
            ></img>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xl font-rubik font-bold ">
              Dedicated success manager
            </p>
            <p className="text-[12px] font-inter text-opacity-50 font-normal ">
              Your own customer success manager to help onboard large team and
              create custom workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workplan;
