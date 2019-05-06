import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home/home";
import DashResto from "./containers/dashresto/dashresto";
import DashFood from "./containers/dashfood/dashfood";
import DashSelesai from "./containers/dashselesai/dashselesai";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashresto" exact component={DashResto} />
        <Route path="/dashresto/:id" component={DashFood} />
        <Route path="/selesai" component={DashSelesai} />
      </Switch>
    </div>
  );
}

export default App;
