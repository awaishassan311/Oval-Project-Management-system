import badge1 from "../../assets/badge1.png";
import React from "react";

const Workspace = () => {
  return (
    <div className="flex justify-center mt-12 flex-col md:flex-row gap-8">
      {/* First div for all sizes */}
      <div className="flex flex-col gap-3">
        <div className="text-black font-inter text-4xl font-normal leading-normal">
          <p className="m-0">Build your</p>
          <p className="m-0">own workspace.</p>
        </div>
        <div>
          <p className="m-0">{`It will take a couple of hours, but will save your `}</p>
          <p className="m-0">{`company weeks in the long term.`}</p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="mt-3 p-3">
            <img
              className="w-3"
              color="orange-500"
              alt=""
              src="src\assets\vector-1.svg"
            />
          </div>
          <div className="flex flex-col p-2 mt-3 gap-3">
            <div className="text-black font-inter text-xl leading-normal">
              <b>Create</b>
              <div className="text-lg font-medium text-gray-500">
                Easy-to-use apps for each team with no code
              </div>
              <div className="bg-orange-500 h-1 w-full"></div>
            </div>
            <div className="flex flex-col text-black font-inter text-xl leading-normal gap-2">
              <b>Organize</b>
              <div className="text-lg font-medium text-gray-500">
                Work into custom hierarchies, fields, and formulas
              </div>
            </div>
            <div className="flex flex-col text-black font-inter text-xl leading-normal gap-2">
              <b>Visualize</b>
              <div className="text-lg font-medium text-gray-500">
                <p className="m-0">Workflows with Tables, Boards, Timelines,</p>
                <p className="m-0">{`Charts & more.`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second div for all sizes */}
      <div className="flex justify-center items-center w-160 rounded-md bg-[#F5F6F9]">
        <img className="w-full" src={badge1} alt="Your Company" />
      </div>
      {/* Third div for all sizes */}
    </div>
  );
};

export default Workspace;
