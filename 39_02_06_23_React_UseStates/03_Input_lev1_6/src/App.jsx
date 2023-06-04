import { useState } from "react";

import "./App.css";

function App() {
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [mail, setmail] = useState("");

  return (
    <>
      <input
        type="text"
        className="surname"
        placeholder="Bitte gebe dein Vorname ein"
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        type="text"
        className="name"
        placeholder="Bitte gebe dein Nachname ein"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="email"
        placeholder="Bitte gebe deine Email ein"
        onChange={(e) => setmail(e.target.value)}
      />
      <div className="output">
        <p>
          Vorname: <span className="outputsurname">{surname}</span>{" "}
        </p>
        <p>
          Nachname: <span className="outputname">{name}</span>{" "}
        </p>
        <p>
          Email: <span className="outputemail">{mail}</span>{" "}
        </p>
      </div>
    </>
  );
}

export default App;
