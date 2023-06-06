import { useState } from "react";
import "./App.css";
// NPM Packete müssen oben importiert werden.
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Einzelen Seiten müssen auch Importiert werden
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home pizza="Hallo ich stehe in der APP.JS und nun bin ich in der Home Seite" />
            }
          />
          <Route
            path="/about"
            element={<About pizza="Hayyyy ich bin About in der Props" />}
          />
          <Route
            path="/contact"
            element={<Contact pizza="Ich bin die Contact Seite " />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
