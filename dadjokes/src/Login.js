import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = { 
        user: {
            username: "",
            password: ""
        }
     };

     handleInputChange = e => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [e.target.name]: e.target.value
            }
        }));
    };

    submitInfo = info => {
        axios
            .post("http://localhost:5000/auth/login", info)
            .then(res => {
                localStorage.setItem("token", res.data.token)
            })
            .catch(err => {
                console.log(err);
            });
    };


    render() { 
        return (
            <div className= "signupform">
            <form onSubmit={this.submitInfo(this.state.user)}>
                <input
                    onChange={this.handleInputChange}
                    placeholder="username"
                    value={this.state.user.username}
                    name="username"
                    required
                  />
                   <input
                    onChange={this.handleInputChange}
                    placeholder="password"
                    value={this.state.user.password}
                    name="password"
                    type="password"
                    required
                  />

                  <button type="submit">Log In</button>
            </form>
        </div>
        );   
    }
}
 
export default Login;