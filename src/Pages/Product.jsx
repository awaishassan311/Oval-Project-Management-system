import React from "react";
import Hero from "../component/Product page/Hero/Hero";
import Reviews from "../component/Landing page/reviews/Reviews";
import Workplan from "../component/Product page/workplan/Workplan";
import Successplan from "../component/Product page/success-plan/Successplan";
import Teams from "../component/Product page/teams/Teams";
const Product = () => {
  return (
    <div>
      <Hero />
      <Reviews />
      <Workplan />
      <Successplan />
      <Teams />
    </div>
  );
};

export default Product;
