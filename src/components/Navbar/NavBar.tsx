import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navigation">
      <ul className="navigation-menu">
        <li className="navigation-menu-item">
          <Link to="/">Главная</Link>
        </li>
        <li className="navigation-menu-item">
          <Link to="/returns">Возвраты</Link>
        </li>
        <li className="navigation-menu-item">
          <Link to="/rejects">Отказы</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
