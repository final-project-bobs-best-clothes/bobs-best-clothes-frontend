import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

function Header() {
  const {cart} = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity,0);

  return (
    <nav className=" navbar fixed-top navbar-light bg-light">
      <div className="container-fluid" style={{ maxWidth: "1300px" }}>
        <Link to="/" className="navbar-brand" style={{ cursor: "pointer" }}>
          Logo
        </Link>
        <div className="d-flex">
          <FaUserCircle
            className="me-5"
            style={{ fontSize: "25", cursor: "pointer" }}
          />
          <Link to="/cart">
            <MdShoppingCart style={{ fontSize: "25", cursor: "pointer" }} />
            {totalQuantity > 0 && (
              <span
                className="badge rounded-pill bg-primary"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "20px",
                  fontSize: "12px",
                }}
              >
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
