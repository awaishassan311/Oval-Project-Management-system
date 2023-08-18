import Header from "./component/header/Header";

import Footer from "./component/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "typeface-inter";
import Landing from "./Pages/Landing";
import Product from "./Pages/Product";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Product" element={<Product />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
