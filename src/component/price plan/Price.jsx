import React, { useState } from "react";

export default function Price() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-col items-center mt-12">
      <div className="bg-white text-[4.06rem] flex flex-col items-center gap-[3.13rem] md:flex-col">
        <div className="flex flex-col items-center gap-[1.25rem]">
          <div>Oval Plans and Pricing</div>
          <div className="text-[1.25rem] text-gray-500">
            30-day free trial, cancel any time, No credit card required
          </div>
        </div>
        <div className="flex items-center gap-[1.25rem] ">
          <div className="flex flex-col items-center gap-[0.63rem]">
            <div className="text-orange-500 text-[1.25rem]">Save 13%</div>
            <div className="text-gray-500 text-[1.25rem] ">Annual Plans</div>
          </div>
          <div
            className="relative w-16 h-8 bg-orange-500 border rounded-6xl cursor-pointer"
            onClick={() => setIsOn(!isOn)}
          >
            <div
              className={`absolute top-0.5 w-7 h-7 bg-white rounded-full transition-transform duration-200 transform ${
                isOn ? "left-8" : "left-0.5"
              }`}
            />
          </div>
          <div className="text-gray-500 text-[1.25rem]">Monthly Plans</div>
        </div>
      </div>

      <div className="border rounded mt-10 w-[75%] md:w-[75%] flex flex-col md:flex-row">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="border-r flex flex-col items-center py-9 w-full md:w-[25%]"
          >
            <div className="pb-8 flex items-center flex-col gap-3">
              <p className="text-2xl font-semibold">Starter</p>
              <p className="text-gray-500">Up to 20 people</p>
            </div>
            <div className="pb-8 flex items-center flex-col gap-3 ">
              <p className="text-3xl font-semibold">$199</p>
              <p className="text-gray-500">Per month, billed annually in USD</p>
            </div>
            <div className="pb-8">
              <p className="text-gray-500 underline">Contact us for a Quote</p>
            </div>
            <button class="mt-10 text-[18px]  bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-500 rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <div className="rounded-[20px] bg-whitesmoke text-[1.5rem] mt-14 flex flex-col md:flex-row justify-center items-center gap-[3.25rem]">
        <b>Enterprise</b>
        <div className="flex flex-col md:items-center gap-[5.25rem] md:flex-row">
          <div className="text-[1.25rem] text-gray-500">
            For companies with over 1,000+ people
          </div>
          <button class="mt-10 text-[18px]  bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-500 rounded">
            Contact Us
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 gap-[1rem] text-gray-500">
        <div>
          See how an all-in-one Oval plan stacks up against the competition and
          saves you money
        </div>
        <b className="text-[1.5rem] text-black">Compare Prices</b>
      </div>
    </div>
  );
}
