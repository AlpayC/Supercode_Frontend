import Item from "./Item";

const ItemList = () => {
  const itemArray = [
    {
      Aufgabe: "Einkaufen gehen",
    },
    {
      Aufgabe: "Budget planen",
    },
    {
      Aufgabe: "Reise vorbereiten",
    },
  ];
  return (
    <>
      {itemArray.map((item, index) => (
        <Item todo={item} key={index} />
      ))}
    </>
  );
};

export default ItemList;
