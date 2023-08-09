import React, { useState } from "react";
import pointer from "../../../src/assets/vector-1.svg";
import badge2 from "../../assets/group-12.svg";
import badge3 from "../../assets/badge1.png";

const Roles = () => {
  const [activeRole, setActiveRole] = useState("Align"); // Default to "Align"

  // Image mapping based on clicked role
  const roleImages = {
    Align: [badge2],
    Link: [badge3],
    Decentralize: [badge2],
  };

  return (
    <div className="flex justify-center items-center mt-10 px-4 flex-col">
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
        <div
          className={`p-2 mt-1 ${activeRole === "Align" && "activePointer"}`}
        >
          <img className="w-2 h-3" alt="" src={pointer} />
        </div>
        <div className="bg-white flex flex-col md:flex-row gap-14 p-1 text-lg mb-4">
          {["Align", "Link", "Decentralize"].map((role, index) => (
            <div
              key={role}
              className={`overflow-hidden mb-4 md:mb-0 ${
                activeRole === role && "activeHighlight"
              }`}
              onClick={() => setActiveRole(role)}
            >
              <b>{role}</b>

              <div
                className={`text-lg font-medium text-gray-500 ${
                  activeRole === role && "activeText"
                }`}
              >
                <p className="m-0">Ideas and knowledge with real-time</p>
                <p className="m-0">collaborative wiki.</p>
              </div>
              {activeRole === role && (
                <div className="bg-orange-500 w-192 h-1 overflow-hidden mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
      <img className="w-[60%] mt-10 " alt="" src={roleImages[activeRole]} />
    </div>
  );
};

export default Roles;
