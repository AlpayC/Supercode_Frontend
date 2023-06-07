import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";

function App() {
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

          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
