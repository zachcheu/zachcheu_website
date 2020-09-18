import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Projects from "./Projects";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
