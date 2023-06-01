import "./Item.css";

const Item = (props) => {
  const productImg = document.querySelector(".product-img");

  return (
    <div className="productgrid">
      <img src={props.product.Produktbild} className="product-img"></img>
      <h2>{props.product.Produktname}</h2>
      <h3>{props.product.Preis}</h3>
      <button>Buy Now</button>
    </div>
  );
};

export default Item;
