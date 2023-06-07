import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import Data from "../data/cars.json";
import "./Details.css";

const Details = () => {
  const idParams = useParams();
  //   Wir bekommen immer den Link raus der oben nach dem "/user/" steht
  console.log({ idParams });

  //   Hier Picken wir uns sozusagen nur den Datensatz raus der gerade benötigt wird. Er sucht nach der ID ----> 3 = 3
  const detailUser = Data.filter((elm) => {
    return elm.id.toString() === idParams.id;
  });

  return (
    <section className="car-details">
      <Nav />
      <h2>{detailUser[0].carModel}</h2>
      <h2>{detailUser[0].CarMake}</h2>
      <h2>{detailUser[0].CarYear}</h2>
    </section>
  );
};

export default Details;
