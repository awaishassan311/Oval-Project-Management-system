import React from "react";
import Hero from "../component/Product page/Hero/Hero";
import Reviews from "../component/Landing page/reviews/Reviews";
import Workplan from "../component/Product page/workplan/Workplan";
import Successplan from "../component/Product page/success-plan/Successplan";
const Product = () => {
  return (
    <div>
      <Hero />
      <Reviews />
      <Workplan />
      <Successplan />
    </div>
  );
};

export default Product;
