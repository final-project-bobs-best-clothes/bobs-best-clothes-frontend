import { useContext, useState } from "react";
import ProductList from "./components/ProductList";
import SearchBar from "../SearchBar/SearchBar";
import { CategoryContext } from "../../App";
import SideBar from "../SideBar/SideBar";
import "./../../App.css";

function ProductFeed() {
  const { setFilterCategory, filterCategory } = useContext(CategoryContext);
  const [filterText, setFilterText] = useState("");

  return (
    <div className="container pt-5" style={{ marginTop: "50px" }}>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-10 col-12">
          <SearchBar filterText={filterText} setFilterText={setFilterText} />
        </div>
        <div className="col-md-2 col-12">
          <SideBar setFilterCategory={setFilterCategory}></SideBar>
        </div>

      </div>
      {/* Product List */}
      <div className="col-md-12 p-4">
        <ProductList filterText={filterText} filterCategory={filterCategory} />
      </div>
    </div>
  );
}

export default ProductFeed;
