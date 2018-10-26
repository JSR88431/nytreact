import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home.js";


const App = () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);

export default App;
