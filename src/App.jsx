import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Dashboard from "./pages/CharacterDashBoard"; ///< index.jsx will be automatically imported 
import NotFoundPage from "./pages/NotFoundPage";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" /> 
        </Switch>
      </Router>
    );
  }
}
