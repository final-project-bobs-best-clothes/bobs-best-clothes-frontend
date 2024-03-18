function ProfileNavbar({showState, setShowState}) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="navbar-nav mx-auto"> {/* mx-auto to center the content */}
          <p
            className={`nav-link ${showState === 'orders' ? 'fw-bold' : ''}`}
            onClick={() => setShowState('orders')}
            style={{ cursor: 'pointer' }} // Add cursor pointer
          >
            Orders
          </p>
          <p
            className={`nav-link ${showState === 'info' ? 'fw-bold' : ''}`}
            onClick={() => setShowState('info')}
            style={{ cursor: 'pointer' }} // Add cursor pointer
          >
            Info
          </p>
        </div>
      </div>
    </nav>
  )
}

export default ProfileNavbar