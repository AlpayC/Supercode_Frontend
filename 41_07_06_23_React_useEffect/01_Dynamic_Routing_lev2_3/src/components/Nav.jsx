import { Link, NavLink } from "react-router-dom";
// - Link, NavLink machen eigentlich das selbe, nur setzt NavLink noch eine klasse "active" mit der man den Link stylen kann.

import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <h1>Super Carlist</h1>
      <NavLink to="/">Home</NavLink>
    </nav>
  );
};

export default Nav;
