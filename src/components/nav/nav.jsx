import React, { Component } from "react";
import "./nav.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";

class Nav extends Component {
  state = {
    menuItems: ["Action", "Romance", "Sci-Fi"],
    moreMenu: ["Uploads", "Downloads", "Settings"],
    avatarMenu: [
      "Change User",
      "Settings",
      "Edit Profile",
      "WatchList",
      "Logout",
    ],
  };

  render() {
    return (
      <nav className="nav">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>

        <div id="search" >
          <RiSearch2Line id="right-search" type="submit" size={30} />
          <input
            type="text"
            placeholder="Lookup Movie..."
            // onChange={(e) => setSearch(e.target.value)}
            // value={searchKey}
            // onClick={searchMovie}
          />
        </div>

        <ul className="nav_menu">
          <li className="nav-item">
            <ul href="/home" className="nav_link">
              Home
            </ul>
          </li>
          <li className="nav-item">
            Movies
            <ul className="nav-item-drop">
                    {this.state.menuItems.map((menuItems) => (
                      <li>{menuItems}</li>
                    ))}
                  </ul>
          </li>
          <li className="nav-item">
            More
            <ul className="nav-item-drop">
                    {this.state.moreMenu.map((moreMenu) => (
                      <li>{moreMenu}</li>
                    ))}
                  </ul>
          </li>
        </ul>

        <div className="avatar" id="avatar-menu">


          <Link to="/subscription">
            <button className="subscription_btn">Subscribe Now</button>
          </Link>
        </div>

        
        <div className="nav_toggler">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3 "></div>
        </div>

      </nav>
    );
  }
}

export default Nav;
