import Home from "./pages/home/home";
import MovieDetails from "./components/movieDetails/movieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";
import "./App.css";
import Card from "./components/categoryCard/card";
import TV from "./components/tv-list/tv";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
        <Route index element={<Home />}></Route>
          <Route path="/movie/:id" element={<Card />} />
          <Route path="/movie" element={<Card />} />
          <Route path="/tv-shows" element={<TV />} />
          <Route path="/movie/:type" element={<Home/>} />
          <Route path="/error" element={<MovieDetails/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
