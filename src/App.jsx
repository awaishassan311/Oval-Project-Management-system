import Badges from "./component/badges/Badges";
import Header from "./component/header/Header";
import Herosection from "./component/hero-section/Herosection";
import Reviews from "./component/reviews/Reviews";
import Workspace from "./component/workspace/Workspace";
import Roles from "./component/roles/Roles";
import Achievement from "./component/achievements/Achievement";
import Footer from "./component/footer/Footer";
import Price from "./component/price plan/Price";
import "typeface-inter";

function App() {
  return (
    <div>
      <Header />
      <Herosection />
      <Badges />
      <Workspace />
      <Roles />
      <Workspace />
      <Reviews />
      <Achievement />
      <Price />
      <Footer />
    </div>
  );
}

export default App;
