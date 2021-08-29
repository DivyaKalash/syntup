import React from 'react' ;
import { Link  } from "react-router-dom";
import "../Css/navbar.css";
const Header = () =>{
    return(
        <div>
            {/* <nav classNameName=""navb"ar">
               
                <ul classNameName="head">
                    <li classNameName="pq" >
                        <Link  classNameName="nav" to="/">Home</Link >
                    </li>
                    <li classNameName="pq">
                        <Link  classNameName="nav" to="/cart">Cart</Link >
                    </li>
                    <li classNameName="pq">
                        <Link  classNameName="nav" to="/signup">Register</Link >
                    </li>
                    <li classNameName="pq">
                        <Link  classNameName="nav" to="/login">Login</Link >
                    </li>
                </ul>
            </nav> */}
            <nav>
        <Link className="navbb"to="/login">Login/Signup</Link>
        <Link className="navbb" to="/myBookings">My Bookings</Link>
        <Link className="navbb"to="/about">About</Link>
        <Link className="navbb"to="/">Home</Link>
        <Link className="navbb syntup"to="/">Syntup</Link>
    </nav>
        </div>
    )
}
export default Header;