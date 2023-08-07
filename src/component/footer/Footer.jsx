import React from "react";
import FooterLogo from "../../../src/assets/logo@2x.png";

const Footer = () => {
  return (
    <div className="bg-black w-full h-full flex mt-10 align-center gap-3 justify-center text-[1.5rem] text-white">
      <div className="flex flex-col sm:flex-row py-[0.63rem] px-[6.25rem] mt-10 sm:gap-[7.25rem]">
        <div className="flex flex-col items-center gap-[0.63rem] mb-10 sm:mb-0">
          <img
            className="w-[6.25rem] h-[6.25rem] object-cover"
            alt="FooterLogo"
            src={FooterLogo}
          />
          <b className="text-white font-inter text-2xl font-bold">
            School Facility Pro
          </b>
          <div className="text-white font-inter text-base font-normal">
            @2023 School Facility Pro
          </div>
        </div>

        <div className="flex flex-col sm:flex-row  sm:gap-x-[8.63rem] text-[1.25rem]">
          <div className="flex flex-col gap-[0.63rem]">
            <b className="text-white font-inter text-2xl font-bold">Product</b>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Landscape
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Referral Program
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Pricing
            </a>
          </div>
          <div className="flex flex-col gap-[0.63rem]">
            <b className="text-white font-inter text-2xl font-bold">Services</b>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Design
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Theams
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Illustrations
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              UI Kit
            </a>
          </div>
          <div className="flex flex-col gap-[0.63rem]">
            <b className="text-white font-inter text-2xl font-bold">Company</b>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              About
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Privacy and Policy
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Careers
            </a>
          </div>
          <div className="flex flex-col gap-[0.63rem]">
            <b className="text-white font-inter text-2xl font-bold">More</b>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              License
            </a>
            <a
              href="#"
              className="text-white font-inter text-base font-normal hover:underline"
            >
              Changlog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
