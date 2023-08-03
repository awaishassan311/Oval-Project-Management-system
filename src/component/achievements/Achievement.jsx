import React from "react";

const Achievement = () => {
  return (
    <div className="flex justify-center items-center mt-12 flex-col">
      <div className=" bg-white overflow-hidden flex flex-row p-[0.63rem] items-center justify-start gap-[12.5rem] text-[6.25rem]">
        <div className="bg-white overflow-hidden flex flex-col p-[0.63rem] items-start justify-start gap-[2.5rem]">
          <div className="bg-white overflow-hidden flex flex-col p-[0.63rem] items-center justify-start gap-[0.63rem]">
            <div className=" w-[25.63rem] h-[9.94rem]">
              <div className="top-[0rem] left-[0rem] bg-white w-[25.63rem] h-[9.94rem] overflow-hidden">
                <div className=" bottom-[1.5rem] left-[calc(50%_-_203px)] bg-navajowhite w-[25.31rem] h-[1.88rem]" />
                <div className=" top-[1.44rem] left-[calc(50%_-_200px)] font-medium">
                  10 years
                </div>
              </div>
            </div>
            <div className=" text-[1.25rem] font-medium text-gray-400">
              In business
            </div>
          </div>
          <div className="bg-white overflow-hidden flex flex-col p-[0.63rem] items-center justify-start gap-[0.63rem]">
            <div className=" w-[16.31rem] h-[9.38rem]">
              <div className="   top-[0rem] left-[calc(50%_-_130.5px)] bg-white w-[16.31rem] h-[9.38rem] overflow-hidden">
                <div className=" bottom-[0.94rem] left-[calc(50%_-_132.5px)] bg-navajowhite w-[25.31rem] h-[1.88rem]" />
                <div className=" top-[1.44rem] left-[calc(50%_-_129.5px)] font-medium">
                  1,092
                </div>
              </div>
            </div>
            <div className=" text-[1.25rem] font-medium text-gray-400">
              Partner Company
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden flex flex-col p-[0.63rem] items-start justify-start gap-[2.5rem]">
          <div className=" text-[1.25rem] font-medium text-gray-400">
            <p className="m-0">Businesses all over the world</p>
            <p className="m-0">{`trust Oval to build their own `}</p>
            <p className="m-0">workflow</p>
          </div>
          <div className="bg-white overflow-hidden flex flex-col p-[0.63rem] items-center justify-start gap-[0.63rem]">
            <div className=" w-[25.63rem] h-[9.38rem]">
              <div className=" top-[0rem] left-[0rem] bg-white w-[25.63rem] h-[9.38rem] overflow-hidden">
                <div className="bottom-[0.94rem] left-[calc(50%_-_206px)] bg-navajowhite w-[25.31rem] h-[1.88rem]" />
                <div className="top-[1.44rem] left-[calc(50%_-_201px)] font-medium">
                  75,000+
                </div>
              </div>
            </div>
            <div className="relative text-[1.25rem] font-medium text-gray-400">
              Customers
            </div>
          </div>
          <div className="bg-white overflow-hidden flex flex-col p-[0.63rem] items-center justify-start gap-[0.63rem]">
            <div className=" w-[12.44rem] h-[9.38rem]">
              <div className="top-[0rem] left-[0rem] bg-white w-[12.44rem] h-[9.38rem] overflow-hidden">
                <div className="bottom-[0.94rem] left-[calc(50%_-_96.5px)] bg-navajowhite w-[25.31rem] h-[1.88rem]" />
                <div className="top-[1.44rem] left-[calc(50%_-_95.5px)] font-medium">
                  39+
                </div>
              </div>
            </div>
            <div className="text-[1.25rem] font-medium text-gray-400">
              Branch office
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
