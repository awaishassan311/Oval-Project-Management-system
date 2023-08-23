import React, { useState } from "react";

export default function Priceplan() {
  const [isOn, setIsOn] = useState(false);

  const annualPlans = [
    {
      title: "Starter",
      peopleLimit: "Up to 20 people",
      price: "$199",
      billingCycle: " Annually billed in USD",
    },
    {
      title: "Growth",
      peopleLimit: "Up to 20 people",
      price: "$399",
      billingCycle: " Annually billed in USD",
    },
    {
      title: "Midsize",
      peopleLimit: "Up to 20 people",
      price: "$499",
      billingCycle: " Annually billed in USD",
    },
    {
      title: "Large",
      peopleLimit: "Up to 20 people",
      price: "$599",
      billingCycle: " Annually billed in USD",
    },
  ];

  const monthlyPlans = [
    {
      title: "Starter",
      peopleLimit: "Up to 20 people",
      price: "$99",
      billingCycle: "Per Month billed  in USD",
    },
    {
      title: "Growth",
      peopleLimit: "Up to 20 people",
      price: "$199",
      billingCycle: "Per Month billed  in USD",
    },
    {
      title: "Midsize",
      peopleLimit: "Up to 20 people",
      price: "$299",
      billingCycle: "Per Month billed  in USD",
    },
    {
      title: "Large",
      peopleLimit: "Up to 20 people",
      price: "$399",
      billingCycle: "Per Month billed  in USD",
    },
  ];

  const currentPlans = isOn ? monthlyPlans : annualPlans;

  return (
    <div className="flex flex-col font-inter px-4 items-center mt-12">
      <div className="bg-white  flex flex-col items-center gap-[3.13rem] md:flex-col">
        <div className="flex flex-col items-center font-inter gap-[1.25rem]">
          <div className="lg:text-4xl  md:text-3xl text-bold text-xl">
            Oval Plans and Pricing
          </div>
          <div className="text[12px] lg:text-2xl md:text-xl font-inter text-gray-500">
            30-day free trial, cancel any time, No credit card required
          </div>
        </div>

        <div className="flex items-center gap-[1.25rem] ">
          <div className="flex flex-col items-center gap-[0.63rem]">
            <div className="text-gray-500 font-inter text-[1.25rem] ">
              Annual Plans
            </div>
          </div>
          <div
            className="relative w-16 h-8 bg-orange-500 rounded-full cursor-pointer"
            onClick={() => setIsOn(!isOn)}
          >
            <div
              className={`absolute top-0.5 ${
                isOn ? "left-8" : "left-0.5"
              } w-7 h-7 bg-white border border-gray-400 rounded-full shadow-md transition-transform duration-300`}
            />
          </div>
          <div className="text-gray-500 font-inter text-[1.25rem]">
            Monthly Plans
          </div>
        </div>
      </div>

      <div className="border rounded mt-10 font-inter w-full md:w-[80%] lg:w-[75%] flex flex-wrap">
        {currentPlans.map((plan, index) => (
          <div
            key={index}
            className="border-b md:border-r lg:border-b-0 flex flex-col items-center py-9 w-full md:w-1/2 lg:w-1/4 bg-white shadow-sm md:shadow-none hover:shadow-md transition-shadow duration-300"
          >
            <div className="pb-8 flex items-center flex-col gap-3">
              <p className="text-2xl font-inter font-semibold">{plan.title}</p>
              <p className="text-gray-500 font-inter">{plan.peopleLimit}</p>
            </div>
            <div className="pb-8 flex items-center flex-col gap-3 ">
              <p className="text-3xl font-semibold">{plan.price}</p>
              <p className="text-gray-500 font-inter">{plan.billingCycle}</p>
            </div>
            <div className="pb-8">
              <p className="text-gray-500 font-inter underline">
                Contact us for a Quote
              </p>
            </div>
            <button className="mt-10 text-[18px] font-inter bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-500 rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
