import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

function CartItem({item, handleDecrement, handleIncrement, calculateSubtotal}) {
const [quantity, setQuantity] = useState("");
const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
    handleIncrement();
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      handleDecrement(); 
    }
  };
  console.log(quantity, item)

  return (
    <div className="container">
        <div className="row" style={{border: "1px solid lightgrey", borderRadius: "10px", marginTop:"24px", padding:"16px 0"}}>
          <div className="col-4">
                <img src={item.imageURL} style={{width:"40%"}} alt={cartItem.title}></img>
            </div>
            <div className="col-8">
                <p>{item.title}</p>
                <div className="row">
                    <div className="input-group col">
                    <span className="input-group-btn">
                          <button type="button" className="btn btn-default">
                            <FaMinus onClick={handleDecrementQuantity} />
                          </button>
                    </span>
                    <input type="text" className="text-center" style={{border:"none", width:"25px"}} value={cartItem.quantity} readOnly/>
                    <span className="input-group-btn">
                          <button type="button" className="btn btn-default">
                            <FaPlus onClick={handleIncrementQuantity} />
                          </button>
                    </span>
                    </div>
                    <div className="col d-flex align-items-center justify-content-start">
                        <input type="text" style= {{border:"none", width:"100px", fontWeight:"bold", textAlign:"right"}} value={"$" + calculateSubtotal(cartItem)} readOnly/>
                    </div>

                </div>

            </div>
        </div>
    </div>
    
  )
}

export default CartItem