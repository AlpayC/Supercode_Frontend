import { Link, NavLink } from "react-router-dom";
// - Link, NavLink machen eigentlich das selbe, nur setzt NavLink noch eine klasse "active" mit der man den Link stylen kann.

import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      {/* So schaut ein Link/NavLink aus. Mit "to" geben wir den pfad an wohin er Navigieren soll */}
      <Link to="/">
        <h2>My Life</h2>
      </Link>
      <div className="link-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">My Blog</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
