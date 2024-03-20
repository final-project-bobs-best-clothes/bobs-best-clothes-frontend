import { OrderContext } from "../../../App";
import { useEffect, useContext, useState } from "react";
import OrderItem from "./OrderItem";

function OrderList() {
  const { orders, setOrders } = useContext(OrderContext);
  const reverseOrders = [...orders].reverse();
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 3;

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = reverseOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      {currentOrders.map((order, index) => (
        <div key={index} className="row justify-content-center mb-4">
          <div className="col-md-6">
            <div className="border rounded p-3">
              <h5 className="mb-4" style={{ fontWeight: "bold" }}>
                Order Number: {order.id}
              </h5>
              <OrderItem order={order} />
              <p className="text-center" style={{ fontWeight: "bold" }}>
                Total: {"$" + order.total}
              </p>
            </div>
          </div>
        </div>
      ))}
      {reverseOrders.length > ordersPerPage && (
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            {[...Array(Math.ceil(reverseOrders.length / ordersPerPage)).keys()].map((pageNumber) => (
              <li key={pageNumber} className={`page-item ${currentPage === pageNumber + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageClick(pageNumber + 1)}>
                  {pageNumber + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default OrderList;
