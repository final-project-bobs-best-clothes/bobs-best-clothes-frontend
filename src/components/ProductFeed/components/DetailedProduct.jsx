import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../App";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";

function DetailedProduct() {
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const selectedProduct = products.find(
      (product) => Number(product.id) === Number(id)
    );
    setProduct(selectedProduct);
  }, [id, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProductItem product={product} />
      <ul>
        <li>{product.description}</li>
      </ul>
    </div>
  );
}

export default DetailedProduct;
