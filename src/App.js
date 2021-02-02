import React, {Component} from "react";
import './App.css';
import {getJobResults} from "./Lib/fetches/jobs.js"

import { Route, Link } from "react-router-dom";


class App extends Component {
  state = {
    results: {
      jobs: [],
    },
  };
  render() {
  return (
    <div >
      
    </div>
  );
}
}
export default App;
