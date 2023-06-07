import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "./App.css";
import BlogDetails from "./pages/BlogDetails";

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
          <Route
            path="/blog"
            element={<Blog pizza="Hayyyy ich bin Blog in der Props" />}
          />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
