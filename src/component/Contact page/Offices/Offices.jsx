import React from "react";
import office from "../../../assets/Office-assets/office.svg";
const Offices = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-[10]">
        <div className="w-[50%] flex justify-center items-center">
          <h1>Our offices</h1>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <p>
            Amazing cities, totally tricked out offices.
            <br />
            Explore the world of Oval.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[10]">
        <div className="w-[50%] flex justify-center items-center flex-col">
          <div className="">
            {" "}
            <img
              className="border-round rounded-[50%] w-full  object-cover"
              src={office}
              alt="Your Company"
            ></img>
            <div className="flex justify-start flex-col items-start">
              <h1>Vancouver Office</h1>
              <p>1085 Homer St. Vancouver BC, CanadaV6B 2*5</p>
              <button>Open in Maps</button>
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
              <h1>Vancouver Office</h1>
              <p>1085 Homer St. Vancouver BC, CanadaV6B 2*5</p>
              <button>Open in Maps</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offices;
