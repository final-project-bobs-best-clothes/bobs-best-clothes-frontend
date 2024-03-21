import { useEffect, useState, useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { CategoryContext } from "../../App";

function CategoryList({ setFilterCategory }) {
 const {categories} = useContext(CategoryContext)

  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => setFilterCategory(e.target.value)}
        style={{
          width: "180px",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
          padding: "6px 12px",
        }}
      >
        <option value=""> All products</option>
        {categories.map((category) => (
          <option
            key={category.id}
            value={category.name}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryList;
