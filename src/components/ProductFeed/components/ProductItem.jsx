import "./../../../App.css"

function ProductItem({ product }) {
  return (
    <div className="card h-100 d-flex flex-column">
      <div className="card-header">
        <img
          src={product.imageURL}
          className="card-img-top flex-grow-1"
          alt={product.title}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
      </div>
  </div>
  );
}

export default ProductItem;
