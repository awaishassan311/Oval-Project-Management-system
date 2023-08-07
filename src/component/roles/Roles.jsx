import React from "react";
import pointer from "../../../src/assets/vector-1.svg";

const Roles = () => {
  return (
    <div className="flex justify-center items-center mt-10 flex-col">
      <div className="text-center text-gray-500 mb-4">
        <div className="text-4xl text-black font-inter font-normal leading-normal">
          Bring all the roles together.
        </div>
      </div>
      <div className="mb-4">
        <p className="m-0">We believe in autonomous teams that own their</p>
        <p className="m-0">work and their piece of workspace.</p>
      </div>
      <div className="flex mt-10 flex-col md:flex-row">
        <div className="p-2 mt-1">
          <img className="w-2 h-3" alt="" src={pointer} />
        </div>
        <div className="bg-white flex flex-col md:flex-row gap-14 p-1 text-lg mb-4">
          <div className="overflow-hidden mb-4 md:mb-0">
            <b>Align</b>
            <div className="text-lg font-medium text-gray-500">
              <p className="m-0">Ideas and knowledge with real-time</p>
              <p className="m-0">collaborative wiki.</p>
            </div>
            <div className="bg-orange-500 w-192 h-1 overflow-hidden mt-2" />
          </div>
          <div className="bg-white box-border overflow-hidden border-t-2 border-solid border-gray-200 mb-4 md:mb-0">
            <b>Link</b>
            <div className="text-lg font-medium text-gray-500">
              <p className="m-0">Visually by building roadmap that</p>
              <p className="m-0">are always up to date.</p>
            </div>
          </div>
          <div className="overflow-hidden border-t-2 border-solid border-gray-200">
            <b>Decentralize</b>
            <div className="text-lg font-medium text-gray-500">
              <p className="m-0">Smoothly when everybody knows</p>
              <p className="m-0">what is important.</p>
            </div>
          </div>
        </div>
      </div>
      <img className="w-250 mt-10 h-110" alt="" src="src\assets\group-12.svg" />
    </div>
  );
};

export default Roles;
