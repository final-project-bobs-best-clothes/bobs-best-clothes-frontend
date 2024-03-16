import React, { useContext } from "react";
import { ProductContext } from "../../../App";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

function ProductList({ filterText, filterCategory }) {
  const { products } = useContext(ProductContext);

  // Filter products based on search text or category
  const filteredProducts = products.filter((item) => {
    const isMatchedTitle = item.title
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const isMatchedCategory =
      filterCategory === "" ||
      item.category.toLowerCase() === filterCategory.toLowerCase();
    return isMatchedTitle && isMatchedCategory;
  });

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        filteredProducts.map((item) => (
          <div key={item.id}>
            <Link to={`/product/${item.id}`}>{item.title}</Link>
            <ProductItem product={item} />
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
