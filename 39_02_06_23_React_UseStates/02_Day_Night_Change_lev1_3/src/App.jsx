import { useState } from "react";

import "./App.css";

function App() {
  const [changeColors, setChangeColors] = useState("inner-container");
  const [changeTxt, setChangeTxt] = useState("Es ist Tag");
  const [changeBtnTxt, setChangeBtnTxt] = useState("Wechsel zu Nacht");

  function changeBG() {
    setChangeColors(
      changeColors === "inner-container"
        ? "inner-container-dark"
        : "inner-container"
    );
    setChangeTxt(changeTxt === "Es ist Tag" ? "Es ist Nacht" : "Es ist Tag");
    setChangeBtnTxt(
      changeBtnTxt === "Wechsel zu Nacht"
        ? "Wechsel zu Tag"
        : "Wechsel zu Nacht"
    );
  }

  return (
    <>
      <div className="outer-container">
        <div className={changeColors}>
          <h1>{changeTxt}</h1>
          <input type="button" value={changeBtnTxt} onClick={changeBG} />
        </div>
      </div>
    </>
  );
}

export default App;
