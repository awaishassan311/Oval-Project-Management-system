import React, { useState } from "react";
import badge1 from "../../assets/Group-11.svg";
// Assuming you have other badge images too
import badge2 from "../../assets/group-12.svg";
import badge3 from "../../assets/group-13.svg";
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
    <div className="flex font-inter justify-center mt-12 flex-col md:flex-row  gap-8">
      <div className="flex flex-col gap-3">
        <div className="text-black font-inter text-4xl font-normal leading-normal">
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
            <img
              className="w-3"
              color="orange-500"
              alt=""
              src="src\assets\vector-1.svg"
            />
          </div>
          <div className="flex flex-col p-2 mt-3 gap-3">
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
        <img className="w-full" src={getBadgeSrc()} alt="Your Company" />
      </div>
    </div>
  );
};

export default Workspace;
