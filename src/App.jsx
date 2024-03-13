import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductFeed/components/ProductList";
import DetailedProduct from "./components/ProductFeed/components/DetailedProduct";

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
        <Routes>
          <Route path="/" element={<ProductList></ProductList>}></Route>
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
