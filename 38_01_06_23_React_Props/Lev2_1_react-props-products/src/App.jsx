import "./App.css";
import ItemList from "./components/items/ItemList";

function App() {
  return (
    <>
      <h1>SUPERSHOP</h1>
      <div className="producttable">
        <ItemList />
      </div>
    </>
  );
}

export default App;
