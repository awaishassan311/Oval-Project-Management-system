import React from "react";
import Priceplan from "../component/Landing page/price plan/Priceplan";
import Brands from "../component/Price page/Brands/Brands";
import Comparisonplan from "../component/Price page/Comparison plan/Comparisonplan";
import Heroprice from "../component/Price page/Hero Section/Heroprice";
import Question from "../component/Price page/questions/Question";

const Price = () => {
  return (
    <div>
      <Heroprice />
      <Priceplan />
      <Brands />
      <Comparisonplan />
      <Question />
    </div>
  );
};

export default Price;
