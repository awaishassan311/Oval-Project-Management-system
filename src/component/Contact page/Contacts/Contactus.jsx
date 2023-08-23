import React, { useEffect } from "react";
import google from "../../../../src/assets/google.svg";
import amazon from "../../../../src/assets/amazon.svg";
import altassian from "../../../../src/assets/atlassian.svg";
import Gillette from "../../../../src/assets/Gillette.svg";
import intel from "../../../../src/assets/intel.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Contactus = () => {
  useEffect(() => {
    document.getElementById("button").addEventListener("click", toggleError);

    const errMessages = document.querySelectorAll("#error");

    function toggleError() {
      errMessages.forEach((el) => {
        el.classList.toggle("hidden");
      });

      const allBorders = document.querySelectorAll(".border-gray-200");
      const allTexts = document.querySelectorAll(".text-gray-500");
      allBorders.forEach((el) => {
        el.classList.toggle("border-red-600");
      });
      allTexts.forEach((el) => {
        el.classList.toggle("text-red-600");
      });
    }
  }, []);
  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);

  const images = [google, amazon, altassian, Gillette, intel]; // Array of image imports

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: slider2.current,
  };

  const settingsNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: slider1.current,
    dots: true,
    focusOnSelect: true,
  };

  return (
    <div>
      <div className="flex justify-center mt-10 gap-10">
        <div className="fex justify-center px-4 py-4 gap-6">
          <div className="flex justify-center items-center flex-col gap-5">
            <div className="flex justify-start items-start">
              <p className="">Contact us</p>
            </div>
            <div className=" flex flex-col justify-start items-start gap-4">
              <h1 className="text-3xl text-bold">Let's talk.</h1>
              <p className=" flex justify-center items-center ">
                If you have any questions about the subscription or are not sure{" "}
                <br />
                which plan is right for you, contact our team and let's schedule
                a call.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[30%]">
            <button className="mt-10 text-[18px] md:text-[16px] font-inter bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-4 border border-orange-500 rounded">
              <p>Call us</p>
              <p>(669) 984-9439</p>
            </button>
            <button className="mt-10 text-[18px] md:text-[16px] font-inter bg-white hover:bg-orange-550 text-orange-600 font-bold py-1 px-4 border border-orange-500 rounded">
              <p>Email us</p>
              <p>help@oval.com</p>
            </button>
          </div>
          <div>
            <div className=" mt-14 ">
              <div className="flex justify-center items-center text-gray-500 text-2xl">
                <p>Leading brands trust Oval for Teamwork Software</p>
              </div>
              <div className="imgslider mt-5">
                <Slider
                  ref={slider2}
                  {...settingsNav}
                  className="slider slider-nav"
                >
                  {images.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Brand ${index}`} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen  p-1 ">
          <div className="mx-auto max-w-md px-4 py-4 bg-white border-1 shadow-lg sm:rounded-3xl">
            <h1 className="text-2xl font-bold mb-1"> Contact Us</h1>
            <p>
              If you have any question or issue's to use out product. Fill the
              form below. We'll help you.
            </p>
            <form id="form" noValidate>
              <div className="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label
                  htmlFor="name"
                  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                >
                  Enter name
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Name is required
                </span>
              </div>
              <div className="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label
                  htmlFor="name"
                  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                >
                  Enter Email
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Name is required
                </span>
              </div>

              {/* ... Other form fields ... */}
              <div className="relative z-0 w-full mb-5">
                <input
                  type="number"
                  name="money"
                  placeholder=" "
                  className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />

                <label
                  htmlFor="money"
                  className="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"
                >
                  Subject
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Amount is required
                </span>
              </div>

              <div className="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="duration"
                  placeholder=" "
                  className="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <div className="absolute top-0 right-0 mt-3 mr-4 text-gray-400">
                  min
                </div>
                <label
                  htmlFor="duration"
                  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                >
                  Duration
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Duration is required
                </span>
              </div>

              <button
                id="button"
                type="button"
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-orange-500 hover:bg-orange-700 hover:shadow-lg focus:outline-none"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
