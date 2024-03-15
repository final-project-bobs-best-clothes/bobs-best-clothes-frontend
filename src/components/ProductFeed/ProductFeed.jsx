import React, { useContext, useState } from 'react'
import ProductList from './components/ProductList'
import SearchBar from '../SearchBar/SearchBar'
import { ProductContext } from '../../App'
import SideBar from '../SideBar/SideBar';

function ProductFeed() {
    const { products } = useContext(ProductContext);
    const [filterText, setFilterText] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    const handleCategorySelect = (category) =>{
        setFilterCategory(category);
    }

    return (
        <div>
            <SearchBar filterText={filterText} setFilterText={setFilterText}></SearchBar>
            <SideBar onCategorySelect={handleCategorySelect}></SideBar>
            <ProductList filterText={filterText} filterCategory={filterCategory}></ProductList>
        </div>
    )
}

export default ProductFeed;
