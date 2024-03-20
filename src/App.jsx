/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DetailedProduct from "./components/ProductFeed/components/DetailedProduct";
import Header from "./components/Header/Header";
import ProductFeed from "./components/ProductFeed/ProductFeed";
import CartItems from "./components/Cart/CartItems";
import Profile from "./components/Profile/Profile";

import ProductForm from "./components/CreateForm/ProductForm";
import CategoryForm from "./components/CreateForm/CategoryForm";
import AdminPanel from "./components/Admin/AdminPanel";


const ProductContext = createContext();
const CartContext = createContext();
const CategoryContext = createContext(); 
const OrderContext = createContext();


function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [filterCategory, setFilterCategory] = useState('');
  const [orders, setOrders] = useState([]);

  const fetchProducts = () => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setProducts(data.data);
      });
  };

  const fetchCategories = () => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setCategories(data.data);
      });
  };

  //Temporary set logged in user to first in list
  const fetchUser = () => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        const tempUser = data.data[0]
        localStorage.setItem("loggedInUser", JSON.stringify(tempUser));
      });
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchUser();
  }, []);

  //console.log(cart);
  return (
    <>
      <OrderContext.Provider value={{orders: orders, setOrders: setOrders}}>
      <CartContext.Provider value={{cart: cart, setCart:setCart, totalPrice: totalPrice, setTotalPrice: setTotalPrice}}>
        <Header></Header>
        <AdminPanel></AdminPanel>
       
      <CategoryContext.Provider value={{ categories: categories ,filterCategory: filterCategory, setFilterCategory: setFilterCategory}}>
      <ProductContext.Provider value={{ products: products, setProducts: setProducts }} >
        <Routes>
          <Route path="/" element={<ProductFeed ></ProductFeed>}></Route>
          <Route
            path="/product/:id"
            element={<DetailedProduct></DetailedProduct>}
          ></Route>
          <Route path="/cart" element={<CartItems></CartItems>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/createProduct" element={<ProductForm></ProductForm>}></Route>
          <Route path="/createCategory" element={<CategoryForm></CategoryForm>}></Route>

        </Routes>
      </ProductContext.Provider>
      </CategoryContext.Provider>
      </CartContext.Provider>
      </OrderContext.Provider>
    </>
  );
}

export { App, ProductContext, CartContext, CategoryContext, OrderContext };
