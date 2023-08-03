import badge1 from "../../assets/badge1.png";
import React from "react";

const Workspace = () => {
  return (
    <div className=" flex justify-center mt-12">
      <div className="  bg-white overflow-hidden flex flex-row py-[0.63rem] px-[0rem] items-center justify-start gap-[3.13rem] text-gray-500">
        <div className="bg-white overflow-hidden flex flex-col py-[0rem] px-[0.63rem] items-start justify-start">
          <div className="bg-white overflow-hidden flex flex-col py-[0rem] px-[0.63rem] items-start justify-start">
            <div className=" w-[31.19rem]">
              <div className=" ">
                <p className="m-0">{`it will take a couple of hours, but will save your `}</p>
                <p className="m-0">{`company weeks in the long term. `}</p>
              </div>
              <div className=" left-[0rem] text-[4.06rem] text-black">
                <p className="m-0">Built your</p>
                <p className="m-0">own workspace.</p>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden flex flex-col p-[0.63rem] items-start justify-start text-[1.5rem] text-black">
            <div className="relative bg-white w-[30.56rem]  overflow-hidden shrink-0">
              <b className="top-[0.63rem] ">Create</b>
              <div className="  top-[3.06rem] left-[1.44rem] text-[1.25rem] font-medium text-gray-500">
                Easy -to-use apps for each team with no code
              </div>
              <div className="  top-[5.19rem] left-[1.44rem] bg-tomato w-[27.75rem]  overflow-hidden" />
              <img
                className="  top-[1.05rem] left-[0rem] w-[0.54rem] "
                alt=""
                src="/vector-1.svg"
              />
            </div>
            <div className="bg-white overflow-hidden flex flex-col p-[0.63rem] items-start justify-start gap-[0.63rem]">
              <b className="relative">Organize</b>
              <div className="relative text-[1.25rem] font-medium text-gray-500">
                Work into custom hierarchies, fields and formulas
              </div>
            </div>
            <div className="bg-white overflow-hidden flex flex-col p-[0.63rem] items-start justify-start gap-[0.63rem]">
              <b className="relative">Visualize</b>
              <div className="relative text-[1.25rem] font-medium text-gray-500">
                <p className="m-0">Workflows with Tables, Boards, Timelines,</p>
                <p className="m-0">{`Charts & more.`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[701px]  flex-shrink-0 rounded-md bg-[#F5F6F9]">
          <img className="w-[1210px] " src={badge1} alt="Your Company"></img>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
