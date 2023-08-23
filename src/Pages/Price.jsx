import React from "react";
import Priceplan from "../component/Landing page/price plan/Priceplan";
import Brands from "../component/Price page/Brands/Brands";
import Comparisonplan from "../component/Price page/Comparison plan/Comparisonplan";
import Heroprice from "../component/Price page/Hero Section/Heroprice";

const Price = () => {
  return (
    <div>
      <Heroprice />
      <Priceplan />
      <Brands />
      <Comparisonplan />
    </div>
  );
};

export default Price;
