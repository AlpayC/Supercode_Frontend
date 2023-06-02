import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function countUp() {
    setCounter(counter + 1);
  }
  function countDown() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(counter);
  }
  return (
    <>
      <h1>
        Counter <span>{counter}</span>
      </h1>
      <input type="button" value="+" onClick={countUp} />
      <input type="button" value="-" onClick={countDown} />
      <input type="button" value="Reset" onClick={reset} />
    </>
  );
}

export default App;
