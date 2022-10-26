import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Filmes } from "./pages/Filmes/Filmes";
import { Home } from "./pages/Home/Home";
import { People } from "./pages/People/People";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/films">
          <Filmes />
        </Route>
        <Route path="/peoples">
          <People />
        </Route>
      </Switch>
    </Router>
  );
}
