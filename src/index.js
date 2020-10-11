import React from "react";
import ReactDOM from "react-dom";
import Recipes from './Recipes'
import { Route, Router } from 'react-router-dom'
import history from "./history";
import Pay from './Pay'
import OTP from "./Otp";
import Success from "./Success";
import Failed from "./Failed";
import App from "./App";

const Index = () => {
  return(
  <Router history={history}>
  <Route path='/' exact strict render={() => {
      return <App />;
  }}>
  </Route>
  <Route path='/rec' exact strict render={() => {
      return <Recipes />;
  }}>
  </Route>

  <Route path='/pay' exact strict render={() => {
      return <Pay/>;
  }}>
  </Route>

  <Route path='/otp' exact strict render={() => {
      return <OTP history={history}/>;
  }}>
  </Route>

  
  <Route path='/success' exact strict render={() => {
      return <Success/>
  }}>
  </Route>

  
  <Route path='/failed' exact strict render={() => {
      return <Failed/>
  }}>
  </Route>

  </Router>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
