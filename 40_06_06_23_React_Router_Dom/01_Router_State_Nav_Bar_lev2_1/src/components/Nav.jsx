// Link gehört zu react-router-dom und ist sozusagen unser a tag
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// - Link, NavLink machen eigentlich das selbe, nur setzt NavLink noch eine klasse "active" mit der man den Link stylen kann.
import "./Nav.css";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("");

  const linkClicked = (link) => {
    setActiveLink(link);
  };
  return (
    <nav>
      {/* So schaut ein Link/NavLink aus. Mit "to" geben wir den pfad an wohin er Navigieren soll */}
      <Link
        to="/"
        onClick={() => linkClicked("home")}
        style={{
          color: activeLink === "home" ? "red" : "black",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        onClick={() => linkClicked("about")}
        style={{
          color: activeLink === "about" ? "red" : "black",
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        onClick={() => linkClicked("contact")}
        style={{
          color: activeLink === "contact" ? "red" : "black",
        }}
      >
        Kontakt
      </Link>
    </nav>
  );
};

export default Nav;
