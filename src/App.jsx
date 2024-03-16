import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DetailedProduct from "./components/ProductFeed/components/DetailedProduct";
import Header from "./components/Header/Header";
import ProductFeed from "./components/ProductFeed/ProductFeed";
import CartItems from "./components/CartList/CartItems";

const ProductContext = createContext();
const CartContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
       // console.log(data);
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //console.log(cart);
  return (
    <>
      <ProductContext.Provider
        value={{ products: products, setProducts: setProducts }}
      >
        <CartContext.Provider value={{cart: cart, setCart:setCart}}>

        <Header></Header>
        <Routes>
          <Route path="/" element={<ProductFeed></ProductFeed>}></Route>
          <Route
            path="/product/:id"
            element={<DetailedProduct></DetailedProduct>}
          ></Route>
          <Route path="/cart" element={<CartItems></CartItems>}></Route>
        </Routes>
        </CartContext.Provider>

      </ProductContext.Provider>
    </>
  );
}

export { App, ProductContext, CartContext };
