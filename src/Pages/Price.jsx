import Priceplan from "../component/Landing page/price plan/Priceplan";
import Brands from "../component/Price page/Brands/Brands";
import Comparisonplan from "../component/Price page/Comparison plan/Comparisonplan";
import Question from "../component/Price page/questions/Question";

const Price = () => {
  return (
    <div>
      <Priceplan />
      <Brands />
      <Comparisonplan />
      <Question />
    </div>
  );
};

export default Price;
