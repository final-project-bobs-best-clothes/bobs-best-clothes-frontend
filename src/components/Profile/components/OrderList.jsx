import { OrderContext } from "../../../App";
import { useContext } from "react";
import OrderItem from "./OrderItem";

function OrderList() {
  const {orders} = useContext(OrderContext);
  console.log(orders)

  return (
    <div className="container">
      {orders.map((order, index) => (
        <div key={index} className="row justify-content-center mb-4">
          <div className="col-md-6">
            <div className="border rounded p-3" >
              <h5 className="mb-4">Order Number: {order.id}</h5>
              <OrderItem order={order} />
              <p className= "text-center"style={{fontWeight:'bold'}}>Total: {"$" +order.totalPrice}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OrderList