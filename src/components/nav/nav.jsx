import React, { Component } from "react";
import "./nav.css";
import logo from "../../images/logo.svg";
import { HiUserCircle } from "react-icons/hi";
import { BsFillBellFill,  } from "react-icons/bs";
import { BsDatabaseFillAdd} from "react-icons/bs";
import { Link } from "react-router-dom";

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
      <section id="nav">
        <div className="nav-left-signup">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>

          <nav className="nav" id="nav-menu">
            <li className="nav-list">Home</li>
            <li className="nav-list">
              Movies
              <ul className="nav-item-drop">
                {this.state.menuItems.map((menuItems) => (
                  <li>{menuItems}</li>
                ))}
              </ul>
            </li>
            <li className="nav-list">
              More
              <ul className="nav-item-drop">
                {this.state.moreMenu.map((moreMenu) => (
                  <li>{moreMenu}</li>
                ))}
              </ul>
            </li>
          </nav>

          <div className="avatar" id="avatar-menu">
            <li id="avatar-shape">
              <BsDatabaseFillAdd  id="avatar-icon" />
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
            </li>
                   
            <Link to = "/subscription">           
            <button  className="subscription_btn">
            Subscribe Now
            </button>
            </Link>       
    
             </div>


        </div>
      </section>
    );
  }
}

export default Nav;
