import ItemList from "../items/ItemList";

const HeaderSection = () => {
  return (
    <section className="herocontainer">
      <h1 className="heroheading">My ToDos</h1>
      <ItemList />
    </section>
  );
};

export default HeaderSection;
