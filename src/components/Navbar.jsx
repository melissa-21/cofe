import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import Router from "./Router";



const navbar = () => {


    return (

            <div className="header_inner">
            <nav className="nav">
                
                        <Link to="/menu" style={{textDecoration: 'none'}}>Menu</Link>
                        <Link to="/main" style={{textDecoration: 'none'}}>Main</Link>
                        <Link to="/catalog" style={{textDecoration: 'none'}}>Catalog</Link>
                        <Link to="/contacts" style={{textDecoration: 'none'}}>Contacts</Link>
                <Router/>
            </nav>
            </div>
    );
}
export default navbar;