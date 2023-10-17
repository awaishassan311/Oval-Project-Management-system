import profile from "../../../../src/assets/profile.jpg";
import icon from "../../../../src/assets/group-16.svg";
const Reviews = () => {
  const ReviewCard = ({ imgSrc, name, role, children }) => (
    <div className="flex flex-col gap-2">
      <div className="font-medium">{children}</div>
      <div className="flex items-center gap-2 text-[1rem]">
        <img
          className="rounded-[50%] w-[4.38rem] h-[4.38rem] object-cover"
          alt=""
          src={imgSrc}
        />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center px-4 mt-12">
      <div className="bg-white flex flex-col font-inter justify-center gap-2 text-[2.06rem]">
        <div className="flex item-center justify-center">
          <div className="flex text-bold font-inter gap-[2.5rem]  lg:text-4xl  text-xl md:text-2xl">
            <img className="w-[5.56rem]" alt="" src={icon} />
            <div>
              <p className="m-0">What makes School Facility Pro</p>
              <p className="m-0">a valuable tool for school management?</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  justify-center items-center mt-10 gap-14 lg:text-2xl  text-[12px] md:text-xl text-black-70">
          <ReviewCard
            imgSrc={profile}
            name="Jafar Andishmand"
            role="Frontend Designer"
          >
            <p className="m-0">"I received great customer service</p>
            <p className="m-0">from the specialists who helped</p>
            <p className="m-0">me. I would recommend to anyone</p>
            <p className="m-0">{`sho wants great dashboard that `}</p>
            <p className="m-0">has great quality"</p>
          </ReviewCard>

          <div className="hidden lg:block border-r-[1px] border-gray-400 h-full"></div>

          <ReviewCard
            imgSrc={profile}
            name="Jafar Andishmand"
            role="Frontend Designer"
          >
            <p className="m-0">"I received great customer service</p>
            <p className="m-0">from the specialists who helped</p>
            <p className="m-0">me. I would recommend to anyone</p>
            <p className="m-0">{`sho wants great dashboard that `}</p>
            <p className="m-0">has great quality"</p>
          </ReviewCard>

          <div className="hidden lg:block border-r-[1px] border-gray-400 h-full"></div>

          <ReviewCard
            imgSrc={profile}
            name="Jafar Andishmand"
            role="Frontend Designer"
          >
            <p className="m-0">"I received great customer service</p>
            <p className="m-0">from the specialists who helped</p>
            <p className="m-0">me. I would recommend to anyone</p>
            <p className="m-0">{`sho wants great dashboard that `}</p>
            <p className="m-0">has great quality"</p>
          </ReviewCard>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
