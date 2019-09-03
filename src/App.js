// Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import TopBar from "./components/layout/TopBar";
import Boundary from "./components/Boundary";
// import Landing from "./components/pages/Landing";

// Global Stylings
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            {/* <Route exact path="/" render={() => <Landing />} /> */}
            <Route
              path="/"
              render={() => (
                <>
                  <TopBar />
                  <Boundary />
                </>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
