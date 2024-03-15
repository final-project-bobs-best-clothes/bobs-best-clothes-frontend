import React from 'react'

function SearchBar({filterText, setFilterText}) {
    const handleChange = (e) =>{
        setFilterText(e.target.value);
    }
  return (
    <div style={{ marginTop:'100px'}}>
    <form>
        <input type="text" placeholder='Search....' value={filterText} onChange={handleChange}></input>
    </form>
    </div>
  )
}

export default SearchBar