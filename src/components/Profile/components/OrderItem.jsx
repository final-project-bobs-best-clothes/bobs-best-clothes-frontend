/* eslint-disable react/prop-types */

function OrderItem({order}) {

  return (
    <div className="container">
      <div className="row">
        {order.cartItems.map((cartItem, index) => (
          <div key={index} className="row justify-content-center mb-4" >
            <div className="d-flex align-items-center">
              <div className="col-5 d-flex justify-content-center">
              <img src={cartItem.product.imageURL} alt={cartItem.product.title} className="mr-3" style={{ width: "50px" }} />
              </div>
              <div className="col-7">
                <h5 className="font-weight-bold mb-1">{cartItem.product.title}</h5>
                <p className="mb-0">{cartItem.quantity}St</p>
                <p className="mb-0">Price: {cartItem.product.price}$</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default OrderItem