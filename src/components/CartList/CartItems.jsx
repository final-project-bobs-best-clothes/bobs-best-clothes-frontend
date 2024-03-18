import { useContext, useEffect } from "react";
import { CartContext } from "../../App";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";

function CartItems() {
  const { cart, setCart, setTotalPrice, totalPrice } = useContext(CartContext);

  //Update total efery time the cart changes
  useEffect(() => {
    calculateTotal();
  }, [cart]);

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

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += calculateSubtotal(item);
    });
    setTotalPrice(total.toFixed(2));
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  return (
    <section className="cart">
      <div className="container w-75" style={{ marginTop: "100px" }}>
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
                <div
                  className="row"
                  style={{
                    border: "1px solid lightgrey",
                    borderRadius: "10px",
                    marginTop: "24px",
                    padding: "16px 0",
                  }}
                >
                  <div className="col-4">
                    <img src={item.imageURL} style={{ width: "40%" }}></img>
                  </div>
                  <div className="col-8">
                    <p>{item.title}</p>
                    <div className="row">
                      <div className="input-group col">
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-default">
                            <FaMinus onClick={() => handleDecrement(index)} />
                          </button>
                        </span>
                        <input
                          type="text"
                          className="text-center"
                          style={{ border: "none", width: "25px" }}
                          value={item.quantity}
                          readOnly
                        />
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-default">
                            <FaPlus onClick={() => handleIncrement(index)} />
                          </button>
                        </span>
                      </div>
                      <div className="col d-flex align-items-center justify-content-start">
                        <input
                          type="text"
                          style={{
                            border: "none",
                            width: "100px",
                            fontWeight: "bold",
                            textAlign: "right",
                          }}
                          value={"$" + calculateSubtotal(item)}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            <div className="d-flex justify-content-end mt-4">
              <h4 style={{ fontWeight: "bold" }}>Total: ${totalPrice}</h4>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-dark">Check Out</button>
            </div>
          </ul>
        )}
      </div>
    </section>
  );
}

export default CartItems;
