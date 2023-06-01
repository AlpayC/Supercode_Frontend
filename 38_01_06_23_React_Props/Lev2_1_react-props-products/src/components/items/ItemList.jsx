import Item from "./Item";

const ItemList = () => {
  const itemArray = [
    {
      Produktbild:
        "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
      Produktname: "cocooil",
      Preis: "30€",
    },
    {
      Produktbild:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 ",
      Produktname: "Polaroid",
      Preis: "60€",
    },
    {
      Produktbild:
        "https://static.wixstatic.com/media/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
      Produktname: "Maui Moisture",
      Preis: "30€",
    },
  ];
  return (
    <>
      {itemArray.map((item, index) => (
        <Item product={item} key={index} />
      ))}
    </>
  );
};

export default ItemList;
