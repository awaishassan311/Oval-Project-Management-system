import React, { useState } from "react";
import badge1 from "../../../assets/workspace1.svg";
import badge2 from "../../../assets/workspace2.svg";
import badge3 from "../../../assets/workspace3.svg";
import pointer from "../../../assets/vector-1.svg";
import "./workspace.css";

const Workspace = () => {
  const [selectedAction, setSelectedAction] = useState(null);

  const getBadgeSrc = () => {
    switch (selectedAction) {
      case "ADD District":
        return badge1;
      case "ADD Schools":
        return badge2;
      case "ADD Buildings, Room, Site Systems":
        return badge3;
      default:
        return badge1;
    }
  };

  const actionDescriptions = {
    "ADD District": "You can add a new district that can contain many schools.",
    "ADD Schools": "Adding multiple schools to an existing district.",
    "ADD Buildings, Room, Site Systems": (
      <>
        <p className="m-0">
          You can add buildings, rooms, and site systems to your school.
        </p>
        {/* <p className="m-0">Charts & more.</p> */}
      </>
    ),
  };

  return (
    <div className="flex font-inter justify-center mt-12 flex-col items-center px-8 gap-8">
      <div className="flex p-10 flex-col justify-center items-center gap-1">
        <div className="text-black font-inter lg:text-4xl text-xl md:text-2xl flex justify-center items-center font-bold leading-normal">
          <p>Empowering Today’s School Facility Professional</p>
        </div>
        <div className="text-black text-opacity-50 text-center font-inter font-normal leading-normal lg:text-2xl mt-3 text-[12px] md:text-xl">
          A modern approach providing a unique, one-of-a-kind user experience
          that will
          <p className="mb-0.5 lg:text-2xl mt-3 text-[12px] md:text-xl">
            revolutionize your facilities department
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-14">
        <div className="gap-3 mb-6 md:mb-0">
          <div className="text-black font-inter text-3xl sm:text-4xl md:text-4xl font-normal leading-normal">
            <p className="m-0">Expand your</p>
            <p className="m-0">School’s infrastructure</p>
          </div>

          <div>
            <p className="m-0 font-inter text-sm sm:text-base md:text-base">{`Effortlessly Expand Your School’s Infrastructure – Add Schools, Buildings,`}</p>
            <p className="m-0 font-inter text-sm sm:text-base md:text-base">{`and Rooms with School Facility Pro’s Powerful Management Feature!`}</p>
          </div>

          <div className="flex flex-col font-inter md:flex-row">
            <div
              className={`mt-3 p-3 ${
                selectedAction === "ADD District" && "createPosition"
              } ${selectedAction === "ADD Schools" && "organizePosition"} ${
                selectedAction === "ADD Buildings, Room, Site Systems" &&
                "visualizePosition"
              }`}
            >
              <img className="w-2" color="orange-500" alt="" src={pointer} />
            </div>

            <div className="flex flex-col cursor-pointer p-2 mt-3 gap-3">
              {[
                "ADD District",
                "ADD Schools",
                "ADD Buildings, Room, Site Systems",
              ].map((action) => (
                <div
                  key={action}
                  className="flex flex-col text-black font-inter text-xl leading-normal gap-2"
                  onClick={() => setSelectedAction(action)}
                >
                  <b>{action}</b>
                  <div className="text-lg font-medium text-gray-500">
                    {actionDescriptions[action]}
                  </div>
                  {selectedAction === action && (
                    <div className="bg-orange-500 h-1 w-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full md:w-[50%] rounded-md bg-[#F5F6F9]">
          <img
            className="w-full h-[100%]"
            src={getBadgeSrc()}
            alt="Your Company"
          />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
