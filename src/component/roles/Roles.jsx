import React from "react";

const Roles = () => {
  return (
    <div className="flex justify-center items-center mt-10 flex-col">
      <div className="text-center text-gray-500">
        <div className="text-4xl text-black font-inter  font-normal leading-normal">
          Bring all the roles together.
        </div>
      </div>
      <div className="">
        <p className="m-0">We believe in autonomous teams that own their</p>
        <p className="m-0">work and their piece of workspace.</p>
      </div>

      <div className="bg-white flex flex-row gap-14 p-4 text-lg">
        <div className="overflow-hidden">
          <b className="">Align</b>
          <div className="text-lg font-medium text-gray-500">
            <p className="m-0">Ideas and knowledge with real-time</p>
            <p className="m-0">collaborative wiki.</p>
          </div>
          <img className="w-2 h-3" alt="" src="/vector-1.svg" />
          <div className="bg-tomato w-192 h-1 overflow-hidden" />
        </div>
        <div className="bg-white box-border w-60 h-16 overflow-hidden border-t-2 border-solid border-gray-200">
          <b className="">Link</b>
          <div className="text-lg font-medium text-gray-500">
            <p className="m-0">Visually by building roadmap that</p>
            <p className="m-0">are always up to date.</p>
          </div>
        </div>
        <div className="overflow-hidden border-t-2 border-solid border-gray-200">
          <b className="">Decentralize</b>
          <div className="text-lg font-medium text-gray-500">
            <p className="m-0">Smoothly when everybody knows</p>
            <p className="m-0">what is important.</p>
          </div>
        </div>
      </div>
      <img className="w-280 h-110" alt="" src="src\assets\group-12.svg" />
    </div>
  );
};

export default Roles;
