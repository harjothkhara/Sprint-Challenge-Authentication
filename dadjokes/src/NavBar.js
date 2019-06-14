import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/jokes">Dad Jokes</NavLink>
        </nav>
    );
};

export default NavBar;