import React, { useState } from "react";

function CategoryForm() {
  const [categoryInput, setCategoryInput] = useState({
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setCategoryInput((inputData) => ({
      ...inputData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(categoryInput);
    setCategoryInput({ name: " ", description: "" });
  };

  return (
    <div className="container push-down">
      <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
        Create A New Category
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Category name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Category name"
            name="name"
            value={categoryInput.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            name="description"
            value={categoryInput.description}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-dark">Submit</button>
      </form>
    </div>
  );
}

export default CategoryForm;
