
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navigation">
      <ul className="navigation-menu">
        <li className="navigation-menu-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Главная
          </NavLink>
        </li>
        <li className="navigation-menu-item">
          <NavLink
            to="/returns"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Возвраты
          </NavLink>
        </li>
        <li className="navigation-menu-item">
          <NavLink
            to="/rejects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Отказы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
