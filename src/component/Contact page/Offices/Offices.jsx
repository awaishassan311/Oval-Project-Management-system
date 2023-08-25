import React from "react";
import office from "../../../assets/Office-assets/office.svg";
const Offices = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row gap-[10]">
        <div className="w-[50%] flex justify-center items-center">
          <h1 className="text-xl md-text-3xl lg:text-4xl text-bold text-rubik">
            Our offices
          </h1>
        </div>
        <div className="w-[50%] flex justify-center items-center py-6">
          <p className="text-[14px] md:text-xl lg:text-2xl ">
            Amazing cities, totally tricked out offices.
            <br />
            Explore the world of Oval.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row gap-[10]">
        <div className="w-[50%] flex justify-center items-center flex-col">
          <div className="">
            {" "}
            <img
              className="border-round rounded-[50%] w-full  object-cover"
              src={office}
              alt="Your Company"
            ></img>
            <div className="flex justify-start flex-col items-start">
              <h1 className="text-inter text-bold text-[16px] md:text-[25px] lg:text-[30px]">
                Vancouver Office
              </h1>
              <p className="text-inter text-[10px] md:text-[15px] lg:text-[20px] ">
                1085 Homer St. Vancouver BC, CanadaV6B 2*5
              </p>
              <button className="text-orange-500">Open in Maps</button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center flex-col">
          <div className="">
            {" "}
            <img
              className="border-round rounded-[50%] w-full  object-cover"
              src={office}
              alt="Your Company"
            ></img>
            <div className="flex justify-start flex-col items-start">
              <h1 className="text-inter text-bold text-[16px] md:text-[25px] lg:text-[30px]">
                Vancouver Office
              </h1>
              <p className="text-inter text-[10px] md:text-[15px] lg:text-[20px]">
                1085 Homer St. Vancouver BC, CanadaV6B 2*5
              </p>
              <button className="text-orange-500">Open in Maps</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offices;
