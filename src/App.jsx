import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import BooksPage from "./components/BooksPage";
import NavMenu from "./components/NavMenu";
import FooterPage from "./components/FooterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/books" element={<BooksPage />} />
        </Routes>
       
        <FooterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
