import React from 'react' ;
import { Link  } from "react-router-dom";
import "../Css/navbar.css";
const Header = () =>{
    return(
        <div>
            {/* <nav className=""navb"ar">
               
                <ul className="head">
                    <li className="pq" >
                        <Link  className="nav" to="/">Home</Link >
                    </li>
                    <li className="pq">
                        <Link  className="nav" to="/cart">Cart</Link >
                    </li>
                    <li className="pq">
                        <Link  className="nav" to="/signup">Register</Link >
                    </li>
                    <li className="pq">
                        <Link  className="nav" to="/login">Login</Link >
                    </li>
                </ul>
            </nav> */}
            <nav>
        <Link class="navb"to="/login">Login/Signup</Link>
        <Link class="navb" to="/cart">Cart</Link>
        <Link class="navb"to="/about">About</Link>
        <Link class="navb"to="/">Home</Link>
    </nav>
        </div>
    )
}
export default Header;