import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Filmes } from "./pages/Filmes/Filmes";
import { Home } from "./pages/Home/Home";

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
      </Switch>
    </Router>
  );
}
