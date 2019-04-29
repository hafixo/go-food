import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Switch>
        <Navbar />
      </Switch>
    </div>
  );
}

export default App;
