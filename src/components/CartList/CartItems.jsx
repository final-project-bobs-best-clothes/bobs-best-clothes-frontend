import React, { useContext } from "react";
import { CartContext } from "../../App";
import ProductItem from "../ProductFeed/components/ProductItem";

function CartItems() {
  const { cart, setCart } = useContext(CartContext);

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    // check the quantity of the product at the specified index greater than 1, then decrease the quantity, else remove the product from the cart
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += calculateSubtotal(item);
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart-items" style={{ marginTop: "100px" }}>
      <h3>Cart Items</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <div>
              <ProductItem product={item}></ProductItem>
              <p>{item.description}</p>
              <div>
                <p>Quantity</p>
                <button onClick={() => handleDecrement(index)}>-</button>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleIncrement(index)}>+</button>
                <p>Subtotal: ${calculateSubtotal(item)}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      <button>Check Out</button>
    </div>
  );
}

export default CartItems;
