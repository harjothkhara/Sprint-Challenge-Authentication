import React from 'react';
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

axios.interceptors.request.use(requestConfig => {
    const token = localStorage.getItem("token");
    requestConfig.headers.authorization = token;
    return requestConfig;
})

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
            {...rest}
            render={props => 
                localStorage.getItem("token") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;