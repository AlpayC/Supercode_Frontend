import Nav from "../components/Nav";

const Home = (props) => {
  return (
    <section>
      <Nav />
      <h1>Home</h1>
      <p>{props.pizza}</p>
    </section>
  );
};

export default Home;
