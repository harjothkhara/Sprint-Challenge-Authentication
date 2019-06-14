import React, { Component } from 'react';
import axios from 'axios';   

class Signup extends Component {
    state = { 
        user: {
            username: "",
            password: ""
        }
     }

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
            .post("http://localhost:3300/api/auth/register", info)
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

                      <button type="submit">Sign Up</button>

                </form>
            </div>
         );
    }
}
 
export default Signup;