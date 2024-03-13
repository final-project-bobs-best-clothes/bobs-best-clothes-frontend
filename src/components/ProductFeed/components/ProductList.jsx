import React, { useContext } from "react";
import { ProductContext } from "../../../App";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

function ProductList() {
  const { products } = useContext(ProductContext);
  //console.log(products);
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <Link to={`/product/${item.id}`}>{item.title}</Link>
          <ProductItem product={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
