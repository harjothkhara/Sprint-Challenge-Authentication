import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Form.css";   

class Signup extends Component {
    state = { 
        user: {
            username: "",
            password: ""
        }
     }

     handleInputChange = e => {
         e.persist();
         this.setState(prevState => ({
             user: {
                 ...prevState.user,
                 [e.target.name]: e.target.value
             }
         }));
     };

     submitInfo = (e, info) => {
         e.preventDefault();
        axios
            .post("http://localhost:3300/api/auth/register", info)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                this.props.history("/jokes");
            })
            .catch(err => {
                console.log(err);
            });
    };


    render() { 
        return ( 
            <div className= "signupform">
                <form onSubmit={e => this.submitInfo(e, this.state.user)}>
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
                      <p>
                          Already Have An Account? <Link to="/login">Log In</Link>
                      </p>

                      <button type="submit">Sign Up</button>

                </form>
            </div>
         );
    }
}
 
export default Signup;