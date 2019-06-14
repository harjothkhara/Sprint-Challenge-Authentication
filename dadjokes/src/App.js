import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import Jokes from "./Jokes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/jokes" component={Jokes} />
    </div>
  );
}

export default App;
