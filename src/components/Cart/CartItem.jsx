import { FaPlus, FaMinus } from "react-icons/fa";

function CartItem({ item, handleIncrement, handleDecrement }) {
  return (
    <div className="container">
      <div
        className="row"
        style={{
          border: "1px solid lightgrey",
          borderRadius: "10px",
          marginTop: "24px",
          padding: "16px 0",
        }}
      >
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <img
            src={item.product.imageURL}
            style={{ width: "40%" }}
            alt={item.product.title}
          ></img>
        </div>
        <div className="col-12 col-md-8 ">
          <p className="mt-2">{item.product.title}</p>
          <div className="row">
            <div className="input-group col">
              <span className="input-group-btn">
                <button type="button" className="btn btn-default">
                  <FaMinus onClick={handleDecrement} />
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
                  <FaPlus onClick={handleIncrement} />
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
                value={"$" + item.product.price * item.quantity}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
