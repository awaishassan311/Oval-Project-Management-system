import React, { useState, useRef } from "react";
import pointer from "../../../src/assets/vector-1.svg";
import badge1 from "../../assets/role1.svg";
import badge2 from "../../assets/role2.svg";
import badge3 from "../../assets/role3.svg";
import "./role.css";

const Roles = () => {
  const [activeRole, setActiveRole] = useState("Align");

  // Create references for each role
  const roleRefs = {
    Align: useRef(null),
    Link: useRef(null),
    Decentralize: useRef(null),
  };

  const [pointerLeft, setPointerLeft] = useState("0px");

  const handleRoleClick = (role) => {
    if (role === "Align") {
      setPointerLeft("0px");
      setActiveRole(role);
      return;
    }
    if (role === "Link") {
      setPointerLeft("345px");
      setActiveRole(role);
      return;
    }
    if (role === "Decentralize") {
      setPointerLeft("688px");
      setActiveRole(role);
      return;
    }
    const roleEl = roleRefs[role].current;
    const roleCenter = roleEl.offsetLeft + roleEl.offsetWidth / 2;
    const pointerCenter = 10; // Assuming the pointer width is 20px
    setPointerLeft(`${roleCenter - pointerCenter}px`);
    setActiveRole(role);
  };

  // Image mapping based on clicked role
  const roleImages = {
    Align: badge1,
    Link: badge3,
    Decentralize: badge2,
  };

  return (
    <div className="flex justify-center items-center mt-10 px-4 flex-col">
      <div className="text-center text-gray-500 mb-4">
        <div className="text-4xl text-black font-inter font-bold leading-normal">
          Bring all the roles together.
        </div>
      </div>

      <div className="mb-4 flex flex-col text-center">
        <p className="m-0">We believe in autonomous teams that own their</p>
        <p className="m-0">work and their piece of workspace.</p>
      </div>

      <div className="roles-container mt-3 p-3 relative">
        {/* Pointer Image */}
        <img
          style={{ left: pointerLeft }}
          className="w-3 h-3 transition-all ease-in-out duration-300 absolute top-30 z-10"
          alt=""
          src={pointer}
        />

        <div className="bg-white flex flex-col cursor-pointer md:flex-row gap-14 p-1 text-lg mb-4 relative">
          {["Align", "Link", "Decentralize"].map((role) => (
            <div
              ref={roleRefs[role]}
              key={role}
              className={`overflow-hidden mb-4 md:mb-0 ${
                activeRole === role && "activeHighlight"
              }`}
              onClick={() => handleRoleClick(role)}
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

      <img className="w-[60%] mt-10" alt="" src={roleImages[activeRole]} />
    </div>
  );
};

export default Roles;
