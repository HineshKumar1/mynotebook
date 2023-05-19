import React,{useEffect} from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom';
function NavBar(props) {
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location])
  
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
    
  }
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
      <li>
      </li>
    </ul>

    {!localStorage.getItem('token') ? <form  className="d-flex">
    <li className="nav-item">
    <Link role='button' to='/login' className="btn btn-primary">Login</Link>
    </li>
    <li className="nav-item">
      <Link role='button' to='/Registration' className="btn btn-primary">SignUp</Link>
      </li>
    </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button> }
  </div>
</nav>
    </>
  )
}

export default NavBar