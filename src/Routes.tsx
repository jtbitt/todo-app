import { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Todos = lazy(() => import("./modules/todos"));

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Todos} />
  </Switch>
);
