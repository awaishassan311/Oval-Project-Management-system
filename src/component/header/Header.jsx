import React from "react";

const logo = "src/assets/logo@2x.png";

const Header = () => {
  return (
    <div class="flex justify-center">
      <div className=" bg-white  overflow-hidden flex flex-row p-2 items-center justify-start gap-14 text-lg">
        <img
          className="relative w-24 h-24 object-cover"
          alt="logo"
          src={logo}
        />
        <div className="bg-white h-24 overflow-hidden flex flex-row py-2 px-10 items-center justify-start gap-12">
          <div>About Us</div>
          <div>Product</div>
          <div>Pricing</div>
          <div>Contact</div>
          <div>Download</div>
        </div>
        <div className="bg-white overflow-hidden flex flex-row py-2 px-7 items-center justify-start gap-10">
          <div>Login</div>
          <div className="w-36 h-12 flex-shrink-0 rounded-md flex align-items-center justify-center border border-gray-600 bg-white">
            <button>Try for Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
