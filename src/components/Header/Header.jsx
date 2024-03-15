import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <nav className=" navbar fixed-top navbar-light bg-light">
      <div className="container-fluid" style={{maxWidth:'1300px'}}>
        <div className="navbar-brand" style={{cursor: 'pointer'}}>Logo</div>
        <div className="d-flex">
          <FaUserCircle className="me-5" style={{fontSize: '25',cursor: 'pointer'}} />
          <MdShoppingCart style={{fontSize: '25', cursor: 'pointer'}}/>
        </div>
      </div>
    </nav>
  );
}

export default Header;
