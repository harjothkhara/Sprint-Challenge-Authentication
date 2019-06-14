import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";

const NavBar = props => {
    return (
        <nav className="navigation">
            <NavLink exact to="/login" activeClassName="active-nav">
                Login
            </NavLink>
            <NavLink to="/jokes" activeClassName="active-nav">
                Dad Jokes
            </NavLink>
            {props.location.pathname === "/jokes" ? (
                <NavLink to="/login" 
                        onClick={() => {
                        localStorage.removeItem("token");
                    }}
                >
                Log Out
                </NavLink>
                ) : null}
        </nav>
    );
};

export default withRouter(NavBar);