import React, { useState, useEffect } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";

import Logo from "../../../src/assets/Logo.svg";
import { Drawer } from "antd";
import "../../style/drawer.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [placement, setPlacement] = useState("right");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getDrawerWidth = () => {
    if (windowWidth <= 640) {
      // <= 640px for mobile devices
      return "50%";
    } else if (windowWidth <= 1024) {
      // 641px - 1024px for tablet devices
      return "50%";
    } else {
      // > 1024px for desktop
      return "250px";
    }
  };

  return (
    <div className="flex justify-between lg:justify-center sm:justify-between md:justify-between gap-10 font-inter px-4 items-center py-6">
      <div className="px-4">
        <Link to="/">
          <img className="h-20" src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="hidden lg:flex gap-6 space-x-10">
        <Link href="/about">About Us</Link>
        <Link to="/Product">Product</Link>
        <Link to="/price">Pricing</Link>
        <Link to="/Contact">Contact</Link>
        <Link href="/download">Download</Link>
      </div>

      <div className="hidden md:flex items-center  space-x-4">
        <button className="px-4">Login</button>
        <button className="px-4 py-2 rounded-md border font-inter border-gray-600">
          Try for Free
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setOpen(true)}>
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      <Drawer
        itle="Basic Drawer"
        placement={placement}
        closable={false} // keep this as false since we're adding a custom close button
        onClose={() => setOpen(false)}
        visible={open}
        width={getDrawerWidth()}
        bodyStyle={{ padding: "20px" }}
      >
        <div className="flex flex-row items-center justify-center gap-10 ">
          <div className="relative mt-0">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-0 left-0"
            >
              <XIcon className="h-6 w-6" />
            </button>

            <nav className=" flex justify-center items-center mt-10 font-inter">
              <div className="flex items-center cursor-pointer   flex-col justify-center gap-5 ">
                <Link href="#">About Us</Link>
                <Link to="/Product">Product</Link>
                <Link to="/Price">Pricing</Link>
                <Link href="#">Contact</Link>
                <Link href="#">Download</Link>
                <button className="px-4 hover:bg-gray-100 ">Login</button>
                <button className="px-2 py-1 rounded-md border hover:bg-gray-100 font-inter border-gray-600">
                  Try for Free
                </button>
              </div>
            </nav>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default Header;
