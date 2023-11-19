import React, { useState } from "react";
import "./nav.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import deleteButton from "../../images/close.png";
import menuIcon from "../../images/menu.png";

const Nav = () => {
  const [openMenu, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");


  const menuItems = [
    { name: "Action", link: "/action" },
    { name: "Romance", link: "/romance" },
    { name: "Sci-Fi", link: "/sci-fi" },
  ];

  const moreMenu = [
    { name: "Uploads", link: "/uploads" },
    { name: "Downloads", link: "/downloads" },
    { name: "Settings", link: "/settings" },
  ];

  const avatarMenu = [
    { name: "Change User", link: "/change-user" },
    { name: "Settings", link: "/user-settings" },
    { name: "Edit Profile", link: "/edit-profile" },
    { name: "WatchList", link: "/watchlist" },
    { name: "Logout", link: "/logout" },
  ];

  return (
    <div>
      <div className="nav">
        <a href="/" className="nav-logo">
          <img src={logo} alt="logo" />
        </a>

        <div className="search-box">
          <div className="search-wrapper">
            <RiSearch2Line id="right-search" type="submit" size={20} />
            <input
              type="text"
              placeholder="Lookup Movie..."
              aria-label="search movies"
              autoComplete="off"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>

          {searchInput && (
            <button
              className="search-btn"
              onClick={() => {
                setSearchInput(""); // Optionally clear the search input on cancel
              }}
              search-toggler
            >
              <img src={deleteButton} alt="cancel search" className="close" />
            </button>
          )}
        </div>

        <div>
          <ul className={`nav_menu ${openMenu ? "open" : " "}`}>
            <li className="nav-item">
              <a href="/home">Home</a>
            </li>
            <li className="nav-item">
              Movies
              <ul className="nav-item-drop">
                {menuItems.map((menuItem, index) => (
                  <li key={index}>
                    <a href={menuItem.link}>{menuItem.name}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              TV Shows
              <ul className="nav-item-drop">
                {/* Replace this with your TV Shows items */}
              </ul>
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
{/* 
      <nav className="sidebar">
        <div className="sidebar_inner">
          <div className="sidebar-list">
            <p className="title">Genre</p>
            <a href="/home" className="sidebar-link">
              Action
            </a>
            <a href="/home" className="sidebar-link">
              Comedy
            </a>
            <a href="/home" className="sidebar-link">
              Romance
            </a>
            <a href="/home" className="sidebar-link">
              Horror
            </a>
            <a href="/home" className="sidebar-link">
              Adventure
            </a>
            <a href="/home" className="sidebar-link">
              Drama
            </a>
            <a href="/home" className="sidebar-link">
              Sci-Fi
            </a>
          </div>
          
          
        </div>
      </nav> */}
    </div>
  );
};

export default Nav;
