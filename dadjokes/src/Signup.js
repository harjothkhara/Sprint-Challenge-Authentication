import React, { Component } from 'react';   

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
         }))
     }

    render() { 
        return ( 
            <div className= "signupform">
                <form>
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
                        required
                      />

                      <button type="submit">Sign Up</button>

                </form>
            </div>
         );
    }
}
 
export default Signup;