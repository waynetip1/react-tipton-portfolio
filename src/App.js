import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import SingleProject from "./pages/SingleProject";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:slug" component={SingleProject} />
        <Route exact path="/tools" component={Tools} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
