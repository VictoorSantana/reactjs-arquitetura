import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


/* Rotas */
import RouteLogin from '../routes/RouteLogin';

/*****/

/* Helpers */
import Credenciais from '../helpers/credenciais';

/*****/

const PrivateRoute = ({ component: Component, ... rest }) => (
  <Route 
  { ... rest}
  render={props => 
      Credenciais.temToken() ? (
          <Component { ... props} />
      ): (
          <Redirect to={{ pathname: "/", state: { from: props.location } }}/>
      )
  }
  />
);

const Routes = () => (
  <BrowserRouter>
        <Switch>
            <Route exact path="/" component={(props) => <RouteLogin  {...props}></RouteLogin>}></Route>
            <PrivateRoute path="/app" component={() => <h2>you are authenticated</h2>}></PrivateRoute>    
        </Switch>
  </BrowserRouter>
);

export default Routes;
