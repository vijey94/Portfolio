import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire</h1>
        <p className="pl-desc">
          Voici quelques unes de mes réalisations! Bien sûr d'autres projets
          sont à venir très bientot ^^
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
