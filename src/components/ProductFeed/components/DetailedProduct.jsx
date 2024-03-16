import React, { useContext, useEffect, useState } from "react";
import { CartContext, ProductContext } from "../../../App";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";

function DetailedProduct() {
  const { products } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext);
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

  // find the index of the product in the cart, if the product already exists in the cart, increase the quantity of the existing product, else add the product to the cart with quantity 1
  const handleAddToCart = () => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      const newCart = [...cart];
      newCart[existingIndex].quantity += 1;
      console.log("Quantity", newCart[existingIndex].quantity);
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  console.log("Added", cart);
  return (
    <div>
      <ProductItem product={product} />
      <ul>
        <li>{product.description}</li>
      </ul>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default DetailedProduct;
