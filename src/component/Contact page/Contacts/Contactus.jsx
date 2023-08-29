import React, { useEffect } from "react";
import google from "../../../../src/assets/google.svg";
import amazon from "../../../../src/assets/amazon.svg";
import altassian from "../../../../src/assets/atlassian.svg";
import Gillette from "../../../../src/assets/Gillette.svg";
import intel from "../../../../src/assets/intel.svg";
const Contactus = () => {
  return (
    <div>
      <div className="flex justify-center flex-col  lg:flex-row mt-10 gap-10 p-5">
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
            <button className="mt-10 text-[18px] md:text-[16px] font-inter bg-white hover:text-orange-700  text-orange-600 font-bold py-1 px-4 border border-orange-500 rounded">
              <p>Email us</p>
              <p>help@oval.com</p>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 ">
            <h1 className="text-xl text-bold">
              Leading brands trust Oval for Teamwork Software
            </h1>
            <div className="flex justify-center items-center  gap-4 p-4">
              <div className="">
                <img className="h-6" src={google} alt="logo" />
              </div>
              <div className="flex justify-center items-center">
                <img className="h-6" src={amazon} alt="logo" />
              </div>
              <div className="">
                <img className="h-6" src={altassian} alt="logo" />
              </div>
              <div className="">
                <img className="h-6" src={Gillette} alt="logo" />
              </div>
              <div className="">
                <img className="h-6" src={intel} alt="logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <form className="w-full max-w-lg ">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                {/* <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
                {/* <p className="text-gray-600 text-xs italic">
                  Some tips - as long as needed
                </p> */}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                ></textarea>
                {/* <p className="text-gray-600 text-xs italic">
                  Re-size can be disabled by set by resize-none / resize-y /
                  resize-x / resize
                </p> */}
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-orange-400 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
