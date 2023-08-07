import React from "react";

const Achievement = () => {
  const InfoCard = ({ number, label }) => (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-center relative">
        <span className="font-medium text-[6.25rem]">{number}</span>
        <div className="absolute bottom-4 left-1/2 w-28 h-1 transform -translate-x-1/2 bg-orange-300"></div>
      </div>
      <span className="text-[1.25rem] font-medium text-gray-400">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center items-center mt-12 flex-col">
      <div className="bg-white flex flex-col md:flex-row p-8 gap-8 md:gap-[280px]">
        <div className="flex flex-col gap-14 mb-8 md:mb-0">
          <div className="text-[1.25rem] font-medium text-gray-400 mb-4">
            <p>Businesses all over the world</p>
            <p>trust Oval to build their own workflow</p>
          </div>
          <InfoCard number="75,000+" label="Customers" />
          <InfoCard number="39+" label="Branch office" />
        </div>
        <div className="flex flex-col gap-14">
          <InfoCard number="10 years" label="In business" />
          <InfoCard number="1,092" label="Partner Company" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
