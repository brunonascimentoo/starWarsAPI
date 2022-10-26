import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link to={"/films"}>films</Link>
        </li>
        <li>
          <Link to={"/peoples"}>people</Link>
        </li>
        <li>
          <a>planets</a>
        </li>
        <li>
          <a>species</a>
        </li>
        <li>
          <a>starships</a>
        </li>
        <li>
          <a>vehicles</a>
        </li>
      </ul>
    </nav>
  );
}
