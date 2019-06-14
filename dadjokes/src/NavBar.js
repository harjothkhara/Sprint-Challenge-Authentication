import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navigation">
            <NavLink exact to="/login" activeClassName="active-nav">
                Login
            </NavLink>
            <NavLink to="/jokes" activeClassName="active-nav">
                Dad Jokes
            </NavLink>
        </nav>
    );
};

export default NavBar;