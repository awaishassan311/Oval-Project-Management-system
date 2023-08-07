import React from "react";
import FooterLogo from "../../../src/assets/logo@2x.png";
const Footer = () => {
  return (
    <div className="bottom-[0rem] left-[0rem] bg-black w-full h-[25.38rem] overflow-hidden text-[1.5rem] text-white">
      <div className="top-[3.56rem] left-[calc(50%_-_686px)] bg-black overflow-hidden flex flex-row py-[0.63rem] px-[6.25rem] items-start justify-start gap-[6.25rem]">
        <div className="w-[19.94rem] h-[14.94rem] overflow-hidden shrink-0">
          <div className="top-[0rem] left-[2.56rem] overflow-hidden flex flex-col p-[0.63rem] items-center justify-start gap-[0.63rem]">
            <img
              className="w-[6.25rem] h-[6.25rem] object-cover"
              alt="FooterLogo"
              src={FooterLogo}
            />
            <b className="  ">School Facility Pro</b>
            <div className="  top-[13.13rem] left-[calc(50%_-_99.5px)] text-[1rem]">
              @2023 School Facility Pro
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row p-[0.63rem] items-start justify-start gap-[1.63rem] text-[1.25rem]">
          <div className="overflow-hidden flex flex-col p-[0.63rem] items-start justify-center gap-[0.63rem]">
            <b className="   text-[1.5rem]">Product</b>
            <div className="  ">Landscape</div>
            <div className="  ">Features</div>
            <div className="  ">Documentation</div>
            <div className="  ">Referral Program</div>
            <div className="  ">Pricing</div>
          </div>
          <div className="overflow-hidden flex flex-col p-[0.63rem] items-start justify-center gap-[0.63rem]">
            <b className="   text-[1.5rem]">Services</b>
            <div className="  ">Documentation</div>
            <div className="  ">Design</div>
            <div className="  ">Theams</div>
            <div className="  ">Illustrations</div>
            <div className="  ">UI Kit</div>
          </div>
          <div className="overflow-hidden flex flex-col p-[0.63rem] items-start justify-center gap-[0.63rem]">
            <b className="   text-[1.5rem]">Company</b>
            <div className="  ">About</div>
            <div className="  ">Terms</div>
            <div className="  ">Privacy and Policy</div>
            <div className="  ">Careers</div>
          </div>
          <div className="overflow-hidden flex flex-col p-[0.63rem] items-start justify-center gap-[0.63rem]">
            <b className="   text-[1.5rem]">More</b>
            <div className="  ">Documentation</div>
            <div className="  ">License</div>
            <div className="  ">Changlog</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
