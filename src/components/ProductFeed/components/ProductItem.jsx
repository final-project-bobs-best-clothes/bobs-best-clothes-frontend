import React from "react";

function ProductItem({ product }) {
  console.log(product)
  return (
    <div>
      <p>{product.price} $</p>
      <img
        src={product.imageURL}
        alt={product.title}
        style={{ width: "20%" }}
      ></img>
    </div>
  );
}

export default ProductItem;
