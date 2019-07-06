import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/ShopPage/ShopPage.components";
import SignInPage from "./pages/SignInPage/SignInPage.component";
import Header from "./components/Header/Header.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
