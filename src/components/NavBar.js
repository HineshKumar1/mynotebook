import React,{useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom';
function NavBar(props) {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location])
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">{props.name}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About us </Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default NavBar