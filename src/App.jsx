import Header from "./component/header/Header";

import Footer from "./component/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "typeface-inter";
import Landing from "./Pages/Landing";
import Product from "./Pages/Product";
import Price from "./Pages/Price";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Price" element={<Price />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
