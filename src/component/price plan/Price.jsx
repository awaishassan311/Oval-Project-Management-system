import React from "react";

export default function Price() {
  return (
    <div className="flex justify-center flex-col mt-12">
      <div className="bg-white  overflow-hidden flex flex-col py-[0rem] px-[0.63rem] box-border items-center justify-start gap-[3.13rem] text-[4.06rem]">
        <div className="flex flex-col items-center justify-start gap-[1.25rem]">
          <div className="  ">Oval Plans and Priceing</div>
          <div className="   text-[1.25rem] text-gray-500">
            30-day free trail, cancel any time, No credit card required
          </div>
        </div>
        <div className="bg-white overflow-hidden flex flex-row p-[0.63rem] items-center justify-start gap-[1.25rem] text-[1.25rem] text-tomato">
          <div className="bg-white overflow-hidden flex flex-col py-[0rem] px-[0.63rem] items-center justify-start gap-[0.63rem]">
            <div className="">Save 13%</div>
            <div className="text-gray-500">Annual Plans</div>
          </div>
          <div className="  ">
            <div className="  top-[0rem] left-[0rem] rounded-6xl bg-tomato " />
            <div className="  top-[0.25rem] left-[0.31rem] rounded-[50%] bg-white " />
          </div>
          <div className="   text-gray-500">Monthly Plans</div>
        </div>
      </div>
      <div className=" flex  justify-center">
        <div className="border border-black rounded w-[75%] flex">
          <div className="border border-r-black w-[25%] flex flex-col items-center py-9">
            <div className="pb-8">
              <p className="text-center text-black text-2xl font-semibold">
                Starter
              </p>
              <p className="text-gray-500 text-20px">Up to 20 people</p>
            </div>
            <div className="pb-8">
              <p className="text-center text-black text-3xl font-semibold">
                Starter
              </p>
              <p className="text-gray-500 text-[20px]">Up to 20 people</p>
            </div>
            <div className="pb-8">
              <p className="text-gray-500 tex-[20px] underline">
                Contact us for a Quote
              </p>
            </div>
            <div>
              <button className="rounded bg-[#FF6846] text-white px-4 py-2">
                Buy Now
              </button>
            </div>
          </div>
          <div className="border border-r-black w-[25%] flex flex-col items-center py-9">
            <div className="pb-8">
              <p className="text-center text-black text-2xl font-semibold">
                Starter
              </p>
              <p className="text-gray-500 text-20px">Up to 20 people</p>
            </div>
            <div className="pb-8">
              <p className="text-center text-black text-3xl font-semibold">
                Starter
              </p>
              <p className="text-gray-500 text-[20px]">Up to 20 people</p>
            </div>
            <div className="pb-8">
              <p className="text-gray-500 tex-[20px] underline">
                Contact us for a Quote
              </p>
            </div>
            <div>
              <button className="rounded bg-[#FF6846] text-white px-4 py-2">
                Buy Now
              </button>
            </div>
          </div>
          <div className="border border-r-black w-[25%] flex flex-col items-center py-9">
            <div className="pb-8">
              <p className="text-center text-black text-2xl font-semibold">
                Starter
              </p>
              <p className="text-gray-500 text-20px">Up to 20 people</p>
            </div>
            <div className="pb-8">
              <p className="text-center text-black text-3xl font-semibold">
                Starter
              </p>
              <p className="text-gray-500 text-[20px]">Up to 20 people</p>
            </div>
            <div className="pb-8">
              <p className="text-gray-500 tex-[20px] underline">
                Contact us for a Quote
              </p>
            </div>
            <div>
              <button className="rounded bg-[#FF6846] text-white px-4 py-2">
                Buy Now
              </button>
            </div>
          </div>
          <div className="border border-r-black w-[25%] flex flex-col items-center py-9">
            <div className="pb-8">
              <p className="text-center text-black text-2xl font-semibold">
                Starter
              </p>
              <p className="text-gray-500 text-20px">Up to 20 people</p>
            </div>
            <div className="pb-8">
              <p className="text-center text-black text-3xl font-semibold">
                Starter
              </p>
              <p className="text-gray-500 text-[20px]">Up to 20 people</p>
            </div>
            <div className="pb-8">
              <p className="text-gray-500 tex-[20px] underline">
                Contact us for a Quote
              </p>
            </div>
            <div>
              <button className="rounded bg-[#FF6846] text-white px-4 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  rounded-[20px] bg-whitesmoke  overflow-hidden text-[1.5rem] mt-14">
        <div className="flex flex-row p-[0.63rem] items-center justify-center  gap-[3.25rem]">
          <b className="  ">Enterprise</b>
          <div className=" flex flex-row justify-center items-center gap-[5.25rem]">
            <div className="   text-[1.25rem] text-gray-500 ">
              For companies with over 1,000+ people
            </div>
            <button className="rounded  bg-[#FF6846] text-white px-4 py-2">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-[0.63rem] items-center justify-start mt-10 gap-[1rem] text-gray-500">
        <div className="  ">
          See how an all-in-one Oval plan stacks up against the competition and
          saves you money
        </div>
        <b className="   text-[1.5rem] text-black">Compare Prices</b>
      </div>
    </div>
  );
}
