import React from "react";

const Achievement = () => {
  const InfoCard = ({ number, label }) => (
    <div className="flex flex-col items-center gap-2 md:gap-4">
      <div className="flex items-center justify-center relative">
        <span className="font-medium font-inter text-[2.5rem] md:text-[4.5rem] lg:text-[6.25rem]">
          {number}
        </span>
        <div className="absolute bottom-4 left-1/2 w-20 h-1 transform -translate-x-1/2 bg-orange-300 md:w-28"></div>
      </div>
      <span className="text-base font-inter font-medium text-gray-400 md:text-xl lg:text-[1.25rem]">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center px-2 mt-6 flex-col md:px-4 md:mt-12">
      <div className="bg-white flex  flex-col p-4 gap-4 md:flex-row md:p-8 md:gap-14">
        <div className="flex flex-col gap-6 mb-6 md:mb-0 md:gap-14">
          <div className="text-base font-inter font-medium text-gray-400 mb-2 md:mb-4 md:text-xl lg:text-[1.25rem]">
            <p>Businesses all over the world</p>
            <p>trust Oval to build their own workflow</p>
          </div>
          <InfoCard number="75,000+" label="Customers" />
          <InfoCard number="39+" label="Branch office" />
        </div>
        <div className="flex font-inter flex-col gap-6 md:gap-14">
          <InfoCard number="10 years" label="In business" />
          <InfoCard number="1,092" label="Partner Company" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
