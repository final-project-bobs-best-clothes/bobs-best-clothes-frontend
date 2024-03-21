import CategoryList from "../Categories/CategoryList";



function SideBar({setFilterCategory}) {

  return (
      <div className="mt-3">
        <CategoryList setFilterCategory={setFilterCategory}></CategoryList>
      </div>
  );
}

export default SideBar;
