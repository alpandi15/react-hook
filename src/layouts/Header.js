import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  console.log('Header Rendered')
  return (
    <nav className="sb-topnav navbar navbar-expand-lg navbar-dark bg-dark site-header sticky-top">
      <Link to="/" className="navbar-brand">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item">
      <Link to="/" className="nav-link">
        Home
      </Link>
      </li>
      <li className="nav-item">
      <Link to="/featured" className="nav-link">Features</Link>
      </li>
      <li className="nav-item">
      <Link to="#" className="nav-link">Pricing</Link>
      </li>
      </ul>

      <div className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
            </li>
        </ul>
        {/* <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user fa-fw" />
            Users
            </Link>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <Link to="#" className="dropdown-item">Settings</Link>
            <div className="dropdown-divider" />
            <Link to="#" className="dropdown-item">Logout</Link>
            </div>
            </li>
        </ul> */}
      </div>
      </div>
    </nav>
)
}

export default Header
