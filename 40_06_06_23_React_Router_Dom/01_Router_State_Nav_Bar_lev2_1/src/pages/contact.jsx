import Nav from "../components/Nav";

const Contact = (props) => {
  return (
    <section>
      <Nav />
      <h1>Kontakt</h1>
      <p>{props.pizza}</p>
    </section>
  );
};

export default Contact;
