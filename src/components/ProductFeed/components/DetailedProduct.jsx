import { useContext, useEffect, useState } from "react";
import { CartContext, ProductContext } from "../../../App";
import { useParams } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

function DetailedProduct() {
  const { products } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const selectedProduct = products.find(
      (product) => Number(product.id) === Number(id)
    );
    setProduct(selectedProduct);
  }, [id, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // find the index of the product in the cart, if the product already exists in the cart, increase the quantity of the existing product, else add the product to the cart with quantity 1
  const handleAddToCart = () => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      const newCart = [...cart];
      newCart[existingIndex].quantity += 1;
      console.log("Quantity", newCart[existingIndex].quantity);
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mx-5  ">
      <div className="row" style={{ marginTop:'150px'}}>
        <div className="col-4">
        <img
          src={product.imageURL}
          className="img-fluid mb-3" // Use Bootstrap's img-fluid class for responsive images
          alt={product.title}
          style={{maxWidth:'300px', maxHeight:'300px'}} // Set max width and height for the image
        />
        </div>
        <div className="col-8">
        <h5 className="card-title pt-4">{product.title}</h5>
        <p className="pt-4" style={{fontWeight:'bold'}} >{"$" + product.price}</p>
        <p className="card-text">{product.description}</p>
        <button onClick={handleAddToCart} className="btn btn-dark mt-4">Add to Cart <MdShoppingCart/></button>

        </div>

      </div>
    </div>
  );
}

export default DetailedProduct;