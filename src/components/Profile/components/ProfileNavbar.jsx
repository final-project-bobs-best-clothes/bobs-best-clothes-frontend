function ProfileNavbar({showState, setShowState}) {
  
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const isAdmin = loggedInUser.roles.some(role => role.name === "ROLE_ADMIN");


  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="navbar-nav mx-auto"> {}
          <p
            className={`nav-link ${showState === 'orders' ? 'fw-bold' : ''}`}
            onClick={() => setShowState('orders')}
            style={{ cursor: 'pointer' }} 
          >
            Orders
          </p>
          <p
            className={`nav-link ${showState === 'info' ? 'fw-bold' : ''}`}
            onClick={() => setShowState('info')}
            style={{ cursor: 'pointer' }} 
          >
            Info
          </p>
          {(isAdmin) && 
          
             <><p
              className={`nav-link`}
              onClick={() => window.location.href = '/createProduct'}
              style={{ cursor: 'pointer' }}
            >
              Create Product
            </p><p
              className={`nav-link`}
              onClick={() => window.location.href = '/createCategory'}
              style={{ cursor: 'pointer' }}
            >
                Create Category
              </p></>
   
          }
        </div>
      </div>
    </nav>
  )
}

export default ProfileNavbar