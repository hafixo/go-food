import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Switch>
        <Header />
      </Switch>
    </div>
  );
}

export default App;
