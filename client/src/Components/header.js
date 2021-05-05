import React from 'react' ;
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <div>
            <nav className="navbar">
               
                <ul className="head">
                    <li className="pq" >
                        <Link className="nav" to="/">Home</Link>
                    </li>
                    <li className="pq">
                        <Link className="nav" to="/cart">Cart</Link>
                    </li>
                    <li className="pq">
                        <Link className="nav" to="/register">Register</Link>
                    </li>
                    <li className="pq">
                        <Link className="nav" to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;