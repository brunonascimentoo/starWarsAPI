import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <NavLink to={"/films"}>films</NavLink>
        </li>
        <li>
          <NavLink to={"/peoples"}>people</NavLink>
        </li>
        <li>
          <NavLink to={"/planets"}>planets</NavLink>
        </li>
        <li>
          <NavLink to={"/species"}>species</NavLink>
        </li>
        <li>
          <NavLink to={"/starships"}>starships</NavLink>
        </li>
        <li>
          <NavLink to={"/vehicles"}>vehicles</NavLink>
        </li>
      </ul>
    </nav>
  );
}
