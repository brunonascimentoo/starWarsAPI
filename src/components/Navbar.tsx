import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <NavLink to="/films">FILMS</NavLink>
        </li>
        <li>
          <a>PEOPLE</a>
        </li>
        <li>
          <a>PLANETS</a>
        </li>
        <li>
          <a>SPECIES</a>
        </li>
        <li>
          <a>STARTCHIPS</a>
        </li>
        <li>
          <a>VEHICLES</a>
        </li>
      </ul>
    </nav>
  );
}
