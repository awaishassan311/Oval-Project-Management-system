import React, { useState } from "react";
import badge1 from "../../assets/workspace1.svg";
import badge2 from "../../assets/workspace2.svg";
import badge3 from "../../assets/workspace3.svg";
import pointer from "../../../src/assets/vector-1.svg";
import "./workspace.css";
const Workspace = () => {
  const [selectedAction, setSelectedAction] = useState(null);

  const getBadgeSrc = () => {
    switch (selectedAction) {
      case "Create":
        return badge1;
      case "Organize":
        return badge2;
      case "Visualize":
        return badge3;
      default:
        return badge1;
    }
  };
  const actionDescriptions = {
    Create: "Easy-to-use apps for each team with no code",
    Organize: "Work into custom hierarchies, fields, and formulas",
    Visualize: (
      <>
        <p className="m-0">Workflows with Tables, Boards, Timelines,</p>
        <p className="m-0">Charts & more.</p>
      </>
    ),
  };
  return (
    <div className="flex font-inter justify-center mt-12 flex-col items-center  px-8  gap-8">
      <div className="flex p-10 flex-col justify-center items-center gap-1">
        <div className="text-black font-inter text-4xl flex justify-center items-center font-bold leading-normal">
          <p>Tools erect walls</p>
        </div>
        <div className="text-black text-opacity-50 text-center font-inter text-base font-normal leading-normal">
          Collaboration is a struggle, when everybody uses a different app.
          <p className="mb-0.5">We have the solution for that.</p>
        </div>
      </div>
      <div className="flex flex-row gap-14 ">
        <div className=" gap-3">
          <div className="text-black font-inter text-4xl font-normal  leading-normal">
            <p className="m-0">Build your</p>
            <p className="m-0">own workspace.</p>
          </div>
          <div>
            <p className="m-0 font-inter">{`It will take a couple of hours, but will save your `}</p>
            <p className="m-0 font-inter">{`company weeks in the long term.`}</p>
          </div>

          <div className="flex flex-col font-inter md:flex-row">
            <div
              className={`mt-3 p-3 ${
                selectedAction === "Create" && "createPosition"
              } ${selectedAction === "Organize" && "organizePosition"} ${
                selectedAction === "Visualize" && "visualizePosition"
              }`}
            >
              <img className="w-2" color="orange-500" alt="" src={pointer} />
            </div>
            <div className="flex flex-col cursor-pointer p-2 mt-3 gap-3">
              {["Create", "Organize", "Visualize"].map((action) => (
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
        <div className="flex justify-center items-center w-[50%]  rounded-md bg-[#F5F6F9]">
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
