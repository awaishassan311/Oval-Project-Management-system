import React from "react";
import google from "../../../assets/google.svg";
import amazon from "../../../assets/amazon.svg";
import altassian from "../../../assets/atlassian.svg";
import Gillette from "../../../assets/Gillette.svg";
import intel from "../../../assets/intel.svg";
const Brands = () => {
  return (
    <div className=" mt-14">
      <div className="flex flex-col justify-center items-center mt-6 ">
        <h1 className="text-2xl text-bold">
          Leading brands trust Oval for Teamwork Software
        </h1>
        <div className="flex justify-center items-center  gap-[10%] p-4">
          <div className="">
            <img className="h-20" src={google} alt="logo" />
          </div>
          <div className="flex justify-center items-center">
            <img className="h-15" src={amazon} alt="logo" />
          </div>
          <div className="">
            <img className="h-15" src={altassian} alt="logo" />
          </div>
          <div className="">
            <img className="h-15" src={Gillette} alt="logo" />
          </div>
          <div className="">
            <img className="h-15" src={intel} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
