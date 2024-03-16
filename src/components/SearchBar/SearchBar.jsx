import React from 'react'

function SearchBar({filterText, setFilterText}) {
    const handleChange = (e) =>{
        setFilterText(e.target.value);
    }
  return (
    <div>
    <form>
        <input type="text" placeholder='Search....' value={filterText} onChange={handleChange}></input>
    </form>
    </div>
  )
}

export default SearchBar