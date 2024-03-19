/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { CartContext, OrderContext } from "../../App";
import { Link } from "react-router-dom";
import "./../../App.css"
import CartItem from "./CartItem";

function CartItems() {
  const { cart, setCart, setTotalPrice, totalPrice } = useContext(CartContext);
  const { setOrders, orders } = useContext(OrderContext);
  const localUser = JSON.parse(localStorage.getItem("loggedInUser"));

  console.log(cart)
  //Update total every time the cart changes
  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const handleDecrement = (index) => {
    // check the quantity of the product at the specified index greater than 1, then decrease the quantity, else remove the product from the cart
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += calculateSubtotal(item);
    });
    setTotalPrice(total.toFixed(2));
  };

  const calculateSubtotal = (item) => {
    return item.product.price * item.quantity;
  };

  const handleCheckOut = () => {
    console.log(cart)
    setOrders([...orders, 
      {
        cartItems: cart,
        user: localUser,
        id: orders.length + 1,
        totalPrice: totalPrice
      }])
    setCart([])  
  }

  return (
    <section className="cart">
      <div className="container w-75 push-down">
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
          Your shopping cart
        </h2>
        {cart.length === 0 ? (
          <div>
            <p>Your cart is empty!</p>
            <p>
              When you add something to your cart, it will appear here. Ready to
              get started?
            </p>
            <Link to="/">
              <button type="button" className="btn btn-dark">
                Start
              </button>
            </Link>
          </div>
        ) : (
          <ul className="list-unstyled">
            {cart.map((item, index) => (
              <li key={index}>
                <CartItem item={item} calculateSubtotal={calculateSubtotal}
                handleDecrement={() => handleDecrement(index)} 
                handleIncrement={() => handleIncrement(index)}>

                </CartItem>
              </li>
            ))}
            <div className="d-flex justify-content-end mt-4">
              <h4 style={{ fontWeight: "bold" }}>Total: ${totalPrice}</h4>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button onClick={handleCheckOut} className="btn btn-dark">Check Out</button>
            </div>
          </ul>
        )}
      </div>
    </section>
  );
}

export default CartItems;

