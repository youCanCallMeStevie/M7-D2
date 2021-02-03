import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import JobDetails from "./Pages/JobDetails/JobDetails";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route
          path="/"
          exact
          render={props => <Home {...props} />}
        />
        <Route
          path="/details/:id"
          exact
          render={props => <JobDetails {...props} />}
        />
      </Router>
    </div>
  );
}

export default App;
