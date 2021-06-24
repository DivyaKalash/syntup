import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { signout } from '../../actions/auth';
import "./style.css";

const Header = (props) => {

   const auth = useSelector(state=> state.auth);
   const dispatch = useDispatch();
   const logout =()=>{
     dispatch(signout());
   }

   const forLoggedInuser = () => {
     return(
      <Nav>
      
      <li className="nav-item">
      <NavLink to={"/categories"} className="nav-link">Categories</NavLink>
      </li>
      <li className="nav-item" >
      <NavLink to={"/services"} className="nav-link">Services</NavLink>
      {/* <NavLink to="/"></NavLink> */}
      </li>
      <li className="nav-item">
      <span className="nav-link" onClick={logout}>Signout</span>
      </li>
    </Nav>
     );
   } 

   const forNonSignedInUser = () => {
     return(<Nav>
       <li className="nav-item">
         <NavLink to="/signin" className="nav-link">Signin</NavLink>
         </li>
         <li className="nav-item">
          <NavLink to="/signup" className="nav-link">Signup</NavLink>

       </li>
       </Nav>
     )
   }

    return (
      
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
          <Link to="/" className="navbar-brand">Syntup Admin</Link>
    {/* <Navbar.Brand className="brand" href="/">Syntup Admin</Navbar.Brand> */}
    {/* <Link to="/" className="navbar-brand">
        Syntup Admin
      </Link>
    // <Nav className="ml-auto">
      <Nav.Link href="/categories">Categories</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/signin">Signin</Nav.Link>
      <Nav.Link href="/signup">Signup</Nav.Link>
    </Nav> */}
    <Nav className="ml-auto">
    {auth.authenticate ? forLoggedInuser() : forNonSignedInUser()}
    </Nav>
  </Navbar>
  
  
    )
}

export default Header;
