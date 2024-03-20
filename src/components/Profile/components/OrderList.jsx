import { OrderContext } from "../../../App";
import { useEffect, useContext} from "react";
import OrderItem from "./OrderItem";


function OrderList() {
  const {orders, setOrders} = useContext(OrderContext);
  
  const fetchOrders = () => {
    fetch("http://localhost:4000/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data, "fetch");
        setOrders(data.data);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);


  return (
    <div className="container">
      {orders.map((order, index) => (
        <div key={index} className="row justify-content-center mb-4">
          <div className="col-md-6">
            <div className="border rounded p-3" >
              <h5 className="mb-4" style={{fontWeight:"bold"}}>Order Number: {order.id}</h5>
              <OrderItem order={order} />
              <p className= "text-center"style={{fontWeight:'bold'}}>Total: {"$" +order.total}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OrderList