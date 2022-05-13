import React from "react";
import About from "../componenets/about/About";
import Intro from "../componenets/intro/Intro";
import ProductList from "../componenets/productList/ProductList";

export default function () {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  );
}
