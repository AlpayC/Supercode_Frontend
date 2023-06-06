import Nav from "../components/Nav";
import "./Home.css";
import Button from "../components/Button";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <h1>Welcome to my simple Blog</h1>
        <Link to="/blog">
          <Button name="Go to articles" />
        </Link>
      </main>
    </>
  );
};

export default Home;
