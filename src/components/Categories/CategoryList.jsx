/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
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
        console.log(data.data, "categories");
        setCategories(data.data);
      });
  };

  return (
    <div>
      <h5>Categories</h5>
      <ul className="simple-list">
        {categories.map((category) => (
          <li key={category.id} onClick={() => setFilterCategory(category.name)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
