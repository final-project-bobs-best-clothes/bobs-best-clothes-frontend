import React, { useContext, useState } from "react";
import { CategoryContext } from "../../App";

function ProductForm() {
  const [productInput, setProductInput] = useState({
    title: "",
    description: "",
    price: "",
    imageURL: "",
    category: "",
  });
  const {categories} = useContext(CategoryContext);
  console.log(categories);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProductInput((inputData) => ({
      ...inputData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(productInput);
    try{
      const result = await fetch("http://localhost:4000/products",
      {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(productInput)
      });
      if(!result.ok){
        console.log("Failed to create product")
        setProductInput({
          title: "",
          description: "",
          price: "",
          imageURL: "",
          category: "",
        });
      }else{
        console.log("Product created")
        const data = await result.json();
        console.log(data);
        setProductInput({
          title: "",
          description: "",
          price: "",
          imageURL: "",
          category: "",
        });
        window.location.reload();
        
      }
    }catch(error){
      console.log('Error', error)
    }


  };

  return (
    <div className="container push-down">
      <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
        {" "}
        Create A New Product
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Product title"
            name="title"
            value={productInput.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="$XX.XX"
            name="price"
            value={productInput.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product image</label>
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            name="imageURL"
            value={productInput.imageURL}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Product description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Product description..."
            name="description"
            value={productInput.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Product categories</label>
          <select className="form-select" name="category" onChange={handleChange}>
            {/* <option value=""> Categories</option> */}
            {categories.map((category, index) =>(
              <option key={index}
              value={category.name} 
              >{category.name}
              </option>
            ))}
            

          </select>

        </div>

        <button className="btn btn-dark">Submit</button>
      </form>
    </div>
  );
}

export default ProductForm;
