import React from "react";

const Heroprice = () => {
  return (
    <div className="flex justify-center px-4 mt-100">
      <div className="w-full text-black text-center font-rubik font-medium text-bold lg:text-4xl md:text-2xl text-xl">
        <p>One tool for your</p>
        whole team{" "}
        <span className="bg-orange-300 p-1 border rounded">needs.</span>
        <p className="text-black mt-10 font-rubik font-medium text-opacity-50 md:text-opacity-60 text-center lg:text-2xl md:text-xl text-[12px]">
          Try Oval free for 30 days to start connected with all your teams.
          <br />
          Cancel any time. No credit card required.
        </p>
      </div>
    </div>
  );
};

export default Heroprice;
