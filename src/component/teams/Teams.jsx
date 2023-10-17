import profile from "../../assets//profile.jpg";
const Teams = () => {
  return (
    <div>
      <div className="mt-14 px-5 ">
        <div className="flex flex-col justify-center  item center gap-10 md:gap-[30%] lg:gap-[40%] lg:flex-row md:flex-row ">
          <div className="flex justify-center item-center gap-5">
            <img
              className="border-round rounded-[50%] w-[4.38rem] h-[4.38rem] object-cover"
              src={profile}
              alt="Your Company"
            ></img>
            <div className="flex flex-col justify-center item-center">
              <p className="text-rubik text-bold ">Jafar Andishmand</p>
              <p className="text-gray-500">Frontend Designer</p>
            </div>
          </div>
          <div className="flex justify-center item-center gap-5">
            <img
              className="border-round rounded-[50%] w-[4.38rem] h-[4.38rem] object-cover"
              src={profile}
              alt="Your Company"
            ></img>
            <div className="flex flex-col justify-center item-center">
              <p className="text-rubik text-bold ">Jafar Andishmand</p>
              <p className="text-gray-500">Frontend Designer</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  gap-10 md:gap-[10%] lg:gap-[20%] mt-10 lg:flex-row md:flex-row">
          <div className="flex justify-center item-center gap-5">
            <img
              className="border-round rounded-[50%] w-[4.38rem] h-[4.38rem] object-cover"
              src={profile}
              alt="Your Company"
            ></img>
            <div className="flex flex-col justify-center item-center">
              <p className="text-rubik text-bold ">Jafar Andishmand</p>
              <p className="text-gray-500">Frontend Designer</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-rubik text-xl lg:text-3xl md:text-2xl text-center">
              Oval is for Everyone.
              <br /> Easy and Free
            </p>
            <button className="mt-4 text-[18px] md:text-[16px] font-inter bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-500 rounded">
              Contact us
            </button>
          </div>

          <div className="flex justify-center item-center gap-5">
            <img
              className="border-round rounded-[50%] w-[4.38rem] h-[4.38rem] object-cover"
              src={profile}
              alt="Your Company"
            ></img>
            <div className="flex flex-col justify-center item-center">
              <p className="text-rubik text-bold ">Jafar Andishmand</p>
              <p className="text-gray-500">Frontend Designer</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center  item center gap-10 md:gap-[30%] lg:gap-[40%] mt-5 lg:flex-row md:flex-row ">
          <div className="flex justify-center item-center gap-5">
            <img
              className="border-round rounded-[50%] w-[4.38rem] h-[4.38rem] object-cover"
              src={profile}
              alt="Your Company"
            ></img>
            <div className="flex flex-col justify-center item-center">
              <p className="text-rubik text-bold ">Jafar Andishmand</p>
              <p className="text-gray-500">Frontend Designer</p>
            </div>
          </div>
          <div className="flex justify-center item-center gap-5">
            <img
              className="border-round rounded-[50%] w-[4.38rem] h-[4.38rem] object-cover"
              src={profile}
              alt="Your Company"
            ></img>
            <div className="flex flex-col justify-center item-center">
              <p className="text-rubik text-bold ">Jafar Andishmand</p>
              <p className="text-gray-500">Frontend Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
