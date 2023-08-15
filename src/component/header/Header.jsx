import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import Logo from "../../../src/assets/Logo.svg";
import { Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <div className="flex justify-between  lg:flex lg:justify-center  sm:flex sm:justify-between  md:flex md:justify-between gap-10 font-inter px-8 items-center py-6  ">
      <div className="mr-[50px]">
        <img className="h-20" src={Logo} alt="logo" />
      </div>

      {/* Navigation links for desktop and tablet, but hidden for mobile */}
      <div className="hidden md:flex space-x-10">
        <a href="#">About Us</a>
        <a href="#">Product</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <a href="#">Download</a>
      </div>

      {/* Login buttons for desktop and tablet */}
      <div className="hidden md:flex items-center  ml-[50px] space-x-4">
        <button className="px-4">Login</button>
        <button className="px-4 py-2 rounded-md border font-inter border-gray-600">
          Try for Free
        </button>
      </div>

      {/* Menu button shown for mobile and hidden for tablet/desktop */}
      <div className="md:hidden">
        <button onClick={showDrawer}>
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={open}
        key={placement}
        width="700px"
      >
        <div>
          <nav className="space-x-10 flex flex-col justify-center items-center font-inter">
            <a href="#">About Us</a>
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#">Download</a>
          </nav>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
