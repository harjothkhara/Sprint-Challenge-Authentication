import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
    state = { 
        jokes:[]
     };

componentDidMount() {
    axios
        .get("http://localhost:3300/api/jokes")
        .then(res => {
            console.log(res);
            this.setState({ jokes: res.data });
        })
        .catch(err => {
            console.log(err)
        });
}

    render() { 
        return ( 
            <div>
                {this.state.jokes.map(joke => (
                    <li>{joke.joke}</li>
                ))}
            </div>
         );
    }
}
 
export default Jokes;