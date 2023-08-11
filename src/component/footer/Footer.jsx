import React from "react";
import FooterLogo from "../../../src/assets/Logo.svg";

const Footer = () => {
  return (
    <div className="bg-black w-full h-full pb-10 flex font-inter px-4 mt-10 align-center gap-3 justify-center text-[1.5rem] text-white">
      <div className="flex flex-col sm:flex-row py-[0.63rem] px-[6.25rem] mt-10 sm:gap-[7.25rem]">
        <div className="flex flex-col items-center gap-[0.63rem] mb-10 sm:mb-0">
          <div
            className="w-[6.25rem] h-[6.25rem] object-cover"
            style={{
              backgroundImage: `url(${FooterLogo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0) invert(1) grayscale(1)", // Modify this filter to achieve your desired effect
            }}
          ></div>
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
              className="text-white no-underline font-inter text-base font-normal  "
            >
              Landscape
            </a>
            <a
              href="#"
              className="text-white no-underline font-inter text-base font-normal  "
            >
              Features
            </a>
            <a
              href="#"
              className="text-white no-underline font-inter text-base font-normal  "
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-white no-underline font-inter text-base font-normal  "
            >
              Referral Program
            </a>
            <a
              href="#"
              className="text-white no-underline font-inter text-base font-normal  "
            >
              Pricing
            </a>
          </div>
          <div className="flex flex-col gap-[0.63rem]">
            <b className="text-white font-inter text-2xl font-bold">Services</b>
            <a
              href="#"
              className="text-white font-inter no-underline text-base font-normal  "
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-white font-inter no-underline text-base font-normal  "
            >
              Design
            </a>
            <a
              href="#"
              className="text-white font-inter no-underline text-base font-normal  "
            >
              Theams
            </a>
            <a
              href="#"
              className="text-white font-inter no-underline text-base font-normal  "
            >
              Illustrations
            </a>
            <a
              href="#"
              className="text-white font-inter no-underline text-base font-normal  "
            >
              UI Kit
            </a>
          </div>
          <div className="flex flex-col gap-[0.63rem]">
            <b className="text-white font-inter text-2xl font-bold">Company</b>
            <a
              href="#"
              className="text-white no-underline font-inter text-base font-normal  "
            >
              About
            </a>
            <a
              href="#"
              className="text-white no-underline font-inter text-base font-normal  "
            >
              Terms
            </a>
            <a
              href="#"
              className="text-white no-underline font-inter text-base font-normal  "
            >
              Privacy and Policy
            </a>
            <a
              href="#"
              className="text-white no-underline font-inter text-base font-normal  "
            >
              Careers
            </a>
          </div>
          <div className="flex flex-col gap-[0.63rem]">
            <b className="text-white font-inter text-2xl font-bold">More</b>
            <a
              href="#"
              className="text-white no-underline font-inter text-base font-normal  "
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-white no-underline font-inter text-base font-normal  "
            >
              License
            </a>
            <a
              href="#"
              className="text-white no-underline font-inter text-base font-normal "
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
