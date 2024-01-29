import Home from "./pages/home/home";
import MovieDetails from "./components/movieDetails/movieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movie/:type" element={<MovieDetails/>} />
          <Route path="/error" element={<MovieDetails/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
