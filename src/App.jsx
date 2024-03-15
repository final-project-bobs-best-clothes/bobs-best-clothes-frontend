import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductFeed/components/ProductList";
import DetailedProduct from "./components/ProductFeed/components/DetailedProduct";
import Header from "./components/Header/Header";

const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setProducts(data.data);
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
