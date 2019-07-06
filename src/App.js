import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/Shop/Shop.components";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
