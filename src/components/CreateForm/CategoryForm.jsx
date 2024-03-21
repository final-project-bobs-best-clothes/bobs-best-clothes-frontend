import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../App";

function CategoryForm() {
  const [categoryInput, setCategoryInput] = useState({
    name: "",
    description: "",
  });
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategoryInput((inputData) => ({
      ...inputData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const result = await fetch("http://localhost:4000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(categoryInput),
      });
      if (!result.ok) {
        console.log("Failed to create category");
        setCategoryInput({
          name: "",
          description: "",
        });
      } else {
        console.log("Category created");
        const data = await result.json();
        setCategoryInput({
          name: "",
          description: "",
        });
      }
    } catch (error) {
      console.log("Error", error);
    }
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
