import React, { Component } from "react";
import "./nav.css";
import logo from "../../images/logo.svg";
import { HiUserCircle } from "react-icons/hi";
import { BsFillBellFill } from "react-icons/bs";
import { BsDatabaseFillAdd } from "react-icons/bs";
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
        <div className="nav_toggler">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3 "></div>
        </div>

        <div className="avatar" id="avatar-menu">
          {/* <li id="avatar-shape">
                <BsDatabaseFillAdd id="avatar-icon" />
              </li>
              <li id="avatar-shape">
                <BsFillBellFill id="avatar-icon" />
              </li>
              <li id="avatar-shape">
                <HiUserCircle id="avatar-icon" />
                <ul className="nav-item-drop">
                  {this.state.avatarMenu.map((avatarMenu) => (
                    <li>{avatarMenu}</li>
                  ))}
                </ul>
              </li> */}

          <Link to="/subscription">
            <button className="subscription_btn">Subscribe Now</button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
