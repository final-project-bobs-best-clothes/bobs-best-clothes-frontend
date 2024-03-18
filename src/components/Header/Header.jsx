import { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

function Header() {
  const {cart} = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity,0);

  return (
    <nav className=" navbar fixed-top bg-white border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand" style={{ cursor: "pointer" }}>
          Logo
        </Link>
        <div className="d-flex">
          <Link to="/profile" style={{color:'inherit'}}>
          <FaUserCircle
            className="me-5"
            style={{ fontSize: "25", cursor: "pointer" }}
          />
          </Link>
          <div style={{position:"relative"}}>
          <Link to="/cart" style={{color:'inherit'}}>
            <MdShoppingCart style={{ fontSize: "25", cursor: "pointer" }} />
            {totalQuantity > 0 && (
              <span
                className="badge rounded-pill bg-primary"
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "4px",
                  transform:"translate(50%, -50%)",
                  fontSize: "12px",
                }}
              >
                {totalQuantity}
              </span>
            )}
          </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Header;
