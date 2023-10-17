const Herosection = () => {
  return (
    <div className="flex justify-center px-4 mt-12">
      <div className="w-full text-black text-center font-rubik font-medium lg:text-4xl md:text-2xl text-xl ">
        <p className="text-black text-center font-rubik font-medium lg:text-2xl md:text-xl text-xl">
          WELCOME TO A NEW ERA OF INTERACTIVE
        </p>
        <p className="mt-10 text-black text-center font-rubik font-bold lg:text-6xl md:text-3xl text-xl">
          {" "}
          School Facility{" "}
          <span className="bg-orange-300 p-1 border rounded">Planning</span>
        </p>
        {/* <p className="mt-3">Career.</p> */}
        <p className="text-black mt-10 font-rubik font-medium text-opacity-50 md:text-opacity-60 text-center lg:text-2xl md:text-xl text-[12px]">
          Your critical facilities information is now right at your fingertips.{" "}
          <br />
          Our innovative and interactive management tools
          <br />
          provide instant access to data and reports necessary to <br /> making
          informed decisions.
        </p>
        <div>
          <button className="mt-10 text-[18px] md:text-[16px] font-inter bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 border border-orange-500 rounded">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
