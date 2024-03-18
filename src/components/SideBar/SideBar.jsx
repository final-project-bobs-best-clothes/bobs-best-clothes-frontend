/* eslint-disable react/prop-types */
import CategoryList from "../Categories/CategoryList";



function SideBar({setFilterCategory}) {

  return (
      <div className="mt-3">
        <h3>Filter on</h3>
        <CategoryList setFilterCategory={setFilterCategory}></CategoryList>
      </div>
  );
}

export default SideBar;
