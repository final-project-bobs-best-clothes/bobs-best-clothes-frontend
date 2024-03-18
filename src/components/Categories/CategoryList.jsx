import React, { useEffect, useState } from "react";
import "./../../App.css"

function CategoryList({ setFilterCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setCategories(data.data);
      });
  };

  return (
    <div>
      <h5>Categories</h5>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} onClick={() => setFilterCategory(category.name)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
