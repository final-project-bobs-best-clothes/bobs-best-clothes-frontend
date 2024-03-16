import React from "react";
import CategoryList from "../../Categories/CategoryList";

function SideBar({ onCategorySelect }) {

  return (
    <div>
        <CategoryList onCategorySelect={onCategorySelect}></CategoryList>
    </div>
  );
}

export default SideBar;
