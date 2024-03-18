import ProductItem from "../../ProductFeed/components/ProductItem"


function OrderItem({order}) {
  return (
    <div className="container">
      <div className="row">
        {order.items.map((item, index) => (
          <div key={index} className="row justify-content-center mb-4">
            <div className="d-flex align-items-center">
              <img src={item.imageURL} alt={item.title} className="mr-3" style={{ width: "50px" }} />
              <div>
                <h5 className="font-weight-bold mb-1">{item.title}</h5>
                <p className="mb-0">{item.quantity}St</p>
                <p className="mb-0">Price: {item.price}$</p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderItem