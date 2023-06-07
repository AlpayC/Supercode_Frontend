import Nav from "../components/Nav";
import Data from "../data/cars.json";
import { Link } from "react-router-dom";

import "./Home.css";
const Home = () => {
  return (
    <>
      <Nav />
      <section className="car-list">
        {Data.map((elm, index) => {
          return (
            <div className="car-list-item" key={index}>
              <h2>{elm.CarMake}</h2>

              <Link to={`/details/${elm.id}`}> Show more </Link>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Home;
