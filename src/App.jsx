import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DetailedProduct from "./components/ProductFeed/components/DetailedProduct";
import Header from "./components/Header/Header";
import ProductFeed from "./components/ProductFeed/ProductFeed";

const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <ProductContext.Provider
        value={{ products: products, setProducts: setProducts }}
      >
        <Header></Header>
        <Routes>
          <Route path="/" element={<ProductFeed></ProductFeed>}></Route>
          <Route
            path="/product/:id"
            element={<DetailedProduct></DetailedProduct>}
          ></Route>
        </Routes>
      </ProductContext.Provider>
    </>
  );
}

export { App, ProductContext };
