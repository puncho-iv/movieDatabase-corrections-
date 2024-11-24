import React, { useState } from "react";
import "./nav.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import deleteButton from "../../images/close.png";
import menuIcon from "../../images/menu.png";
// import MovieCard from "../movie-card/movieCard";

const Nav = () => {
  const [openMenu, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  // const [movies, ] = useState([]);
  // const [, setSelectedMovies] = useState([]);

  // const renderMovies = (movies) =>
  //   movies.map((movie) => (
  //     <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
  //   ));

  // const selectMovie = async (movie) => {
  //   const data = trendingMovies(movie.id);
  //   console.log("movie data", data);
  //   setSelectedMovies(movie);
  // };

  // useEffect(() => {
  //   trendingMovies();
  // }, []);

  // const trendingMovies = (movie) =>
  //   movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const moreMenu = [
    { name: "Uploads", link: "/uploads" },
    { name: "Downloads", link: "/downloads" },
    { name: "Settings", link: "/settings" },
  ];

  return (
    <div>
      <div className="nav">
        <div className="nav-left">
          <a href="/" className="nav-logo">
            <img src={logo} alt="logo" />
          </a>
          <ul className={`nav_menu ${openMenu ? "open" : " "}`}>
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/movie"> Movies</a>
            </li>
            <li className="nav-item">
              <a href="/tv-shows"> TV Shows</a>
            </li>
            <li className="nav-item">
              More
              <ul className="nav-item-drop">
                {moreMenu.map((moreMenuItem, index) => (
                  <li key={index}>
                    <a href={moreMenuItem.link}>{moreMenuItem.name}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <div className="search-box">
            <div className="search-wrapper">
              <RiSearch2Line id="right-search" type="submit" size={20} />
              <input
                type="text"
                placeholder="Lookup Movie..."
                value={searchInput}
                onChange={handleSearch}
              />
            </div>

            {searchInput && (
              <button
                className="search-btn"
                onClick={() => {
                  setSearchInput(""); // Optionally clear the search input on cancel
                }}
                // search-toggler
              >
                <img src={deleteButton} alt="cancel search" className="close" />
              </button>
            )}
          </div>

          <div className="login">
            <a href="/">
        
              <h1 className="login">Login</h1>

            </a>
            <a href="/">
              <h1 className="login">Join MDB</h1>
            </a>
          </div>
        </div>

        {openMenu && window.innerWidth <= 1024 && (
          <div>
            <Link to="/subscription">
              <button className="subscription_btn">Subscribe Now</button>
            </Link>
          </div>
        )}

        <button
          className="nav_toggler"
          onClick={() => {
            setOpen(!openMenu);
          }}
        >
          {openMenu ? (
            <div className="close_btn">
              <img src={deleteButton} alt="close menu" />
            </div>
          ) : (
            <img src={menuIcon} alt="open menu" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Nav;
