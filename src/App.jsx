import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DetailedProduct from "./components/ProductFeed/components/DetailedProduct";
import Header from "./components/Header/Header";
import ProductFeed from "./components/ProductFeed/ProductFeed";
import CartItems from "./components/CartList/CartItems";

const ProductContext = createContext();
const CartContext = createContext();
const CategoryContext = createContext(); 

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [filterCategory, setFilterCategory] = useState('');

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
      <CartContext.Provider value={{cart: cart, setCart:setCart, totalPrice: totalPrice, setTotalPrice: setTotalPrice}}>
        <Header></Header>
      <CategoryContext.Provider value={{ filterCategory: filterCategory, setFilterCategory: setFilterCategory}}>
      <ProductContext.Provider value={{ products: products, setProducts: setProducts }} >
        <Routes>
          <Route path="/" element={<ProductFeed></ProductFeed>}></Route>
          <Route
            path="/product/:id"
            element={<DetailedProduct></DetailedProduct>}
          ></Route>
          <Route path="/cart" element={<CartItems></CartItems>}></Route>
        </Routes>
      </ProductContext.Provider>
      </CategoryContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export { App, ProductContext, CartContext, CategoryContext };
