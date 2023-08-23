import React from "react";

import Badges from "../component/Landing page/badges/Badges";
import Herosection from "../component/Landing page/hero-section/Herosection";
import Reviews from "../component/Landing page/reviews/Reviews";
import Workspace from "../component/Landing page/workspace/Workspace";
import Roles from "../component/Landing page/roles/Roles";
import Achievement from "../component/Landing page/achievements/Achievement";

import Price from "../component/Landing page/price plan/Priceplan";
const Landing = () => {
  return (
    <>
      <Herosection />
      <Badges />
      <Workspace />
      <Roles />
      <Workspace />
      <Reviews />
      <Achievement />
      <Price />
    </>
  );
};

export default Landing;
