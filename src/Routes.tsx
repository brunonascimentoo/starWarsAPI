import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Species } from "./pages/Species/Species";
import { Filmes } from "./pages/Filmes/Filmes";
import { Home } from "./pages/Home/Home";
import { People } from "./pages/People/People";
import { Planets } from "./pages/Planets/Planets";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/films"}>
          <Filmes />
        </Route>
        <Route path={"/peoples"}>
          <People />
        </Route>
        <Route path={"/planets"}>
          <Planets />
        </Route>
        <Route path={"/species"}>
          <Species />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
