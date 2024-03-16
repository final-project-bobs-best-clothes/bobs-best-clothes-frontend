import React from "react";

function ProductItem({ product }) {
  return (
    <div>
      <p>${product.price}</p>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "20%" }}
      ></img>
    </div>
  );
}

export default ProductItem;
