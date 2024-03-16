import React, { useEffect, useState } from "react";
import "./../../App.css"

function CategoryList({ setFilterCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  };

  return (
    <div>
      <h5>Categories</h5>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} onClick={() => setFilterCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
