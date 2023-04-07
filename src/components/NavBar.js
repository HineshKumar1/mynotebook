import React,{useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom';
function NavBar(props) {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location])
  
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">{props.name}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class={`nav-link ${location.pathname==="/"? "active": ""}`} to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About us </Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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