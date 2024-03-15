import React from "react";

function SideBar({ onCategorySelect }) {
  const categories = ["Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"];

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onCategorySelect(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
