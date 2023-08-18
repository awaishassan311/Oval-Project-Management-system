import React, { useState, useRef } from "react";
import pointer from "../../../assets/vector-1.svg";
import badge1 from "../../../assets/role1.svg";
import badge2 from "../../../assets/role2.svg";
import badge3 from "../../../assets/role3.svg";
import "./role.css";

const Roles = () => {
  const [activeRole, setActiveRole] = useState("Align");
  const [pointerLeft, setPointerLeft] = useState("0px");
  const [pointerTop, setPointerTop] = useState("0px");

  // Adjustments for pointer position
  const LEFT_ADJUSTMENTS = {
    Align: "-6px",
    Link: "-6px",
    Decentralize: "-6px",
  };

  const TOP_ADJUSTMENTS = {
    Align: "3px",
    Link: "-8px",
    Decentralize: "-8px",
  };

  const roleRefs = {
    Align: useRef(null),
    Link: useRef(null),
    Decentralize: useRef(null),
  };

  // Inside your handleRoleClick function

  const handleRoleClick = (role) => {
    const roleEl = roleRefs[role].current;
    if (window.innerWidth > 768) {
      // Desktop
      setPointerLeft(
        `${roleEl.offsetLeft + parseInt(LEFT_ADJUSTMENTS[role], 10)}px`
      );
    } else if (window.innerWidth <= 768 && window.innerWidth > 576) {
      // Tablet
      setPointerTop(
        `${roleEl.offsetTop + parseInt(TOP_ADJUSTMENTS[role], 10)}px`
      );
      setPointerLeft("0"); // or any adjustment you want for tablet
    } else {
      // Mobile
      setPointerTop(
        `${roleEl.offsetTop + parseInt(TOP_ADJUSTMENTS[role], 10)}px`
      );
      setPointerLeft("0"); // or any adjustment you want for mobile
    }
    setActiveRole(role);
  };

  const roleImages = {
    Align: badge1,
    Link: badge2,
    Decentralize: badge3,
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
          style={{ left: pointerLeft, top: pointerTop }}
          className="roles-pointer"
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
      <div className=" mt-14 px-4">
        <div className="flex justify-center flex-col items-center  ">
          <div className="flex justify-center w-full">
            <img
              className="h-[180px] lg:h-[800px]"
              src={roleImages[activeRole]}
              alt="Your Company"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
