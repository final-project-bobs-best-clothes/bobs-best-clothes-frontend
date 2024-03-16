import  { useContext, useState } from 'react'
import ProductList from './components/ProductList'
import SearchBar from '../SearchBar/SearchBar'
import { CategoryContext } from '../../App';
import SideBar from '../SideBar/SideBar';
import "./../../App.css"

function ProductFeed() {
    const {setFilterCategory, filterCategory} = useContext(CategoryContext)
    const [filterText, setFilterText] = useState('');

    return (
        <div className="container-fluid pt-5">
        <div className="row">
            {/* Sidebar */}
            <div className="col-md-2 sidebar position-fixed vh-100">
                <SideBar setFilterCategory={setFilterCategory} />
            </div>
            {/* Main Content */}
            <div className="col-md-10 d-flex justify-content-center align-items-center offset-md-2">
                <div className="row">
                    {/* Search Bar */}
                    <div className="col-md-12 text-center mt-5">
                        <SearchBar filterText={filterText} setFilterText={setFilterText} />
                    </div>
                    {/* Product List */}
                    <div className="col-md-12 p-4">
                        <ProductList filterText={filterText} filterCategory={filterCategory} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProductFeed;
