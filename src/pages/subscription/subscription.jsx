import React from "react";
import logo from "../../images/logo.svg";
import "./subscription.css";
import Left from "../../images/left.png";
import { BsCheck2, BsBookmarkStarFill } from "react-icons/bs";
import { useForm } from "react-hook-form";

const Subscription = () => {
  return (
    <div className="leftSubscribe">
      <div className="col1">
        <img src={logo} alt="background" id="subLogo" />
        <img src={Left} alt="background-img" id="leftImg" />
        <ul>
          <li>
            <BsCheck2 id="check" />
            Unlimited Movies and Shows
          </li>
          <li>
            <BsCheck2 id="check" />
            Watch anywhere. Cancel anytime
          </li>
          <li>
            <BsCheck2 id="check" />
            Watch on any device at anytime
          </li>
          <li>
            <BsCheck2 id="check" />
            Download all your favorites and watch over again
          </li>
        </ul>
      </div>
      <div className="col2">
        <h3>
          <BsBookmarkStarFill id="icon" />
          Choose your Plan
        </h3>

        <form className="subForm">
          <label className="subLabel">
            <input type="radio" name="plans" id="free" />
            <span id="subSpan">FREE</span> ONE MONTH
          </label>

          <label className="subLabel">
            <input type="radio" name="plans" id="free" />
            <span id="subSpan">
              <sup>₵</sup>15<small>/month</small>
            </span>{" "}
            NO LIMITS
          </label>
          <br />
          <p id="subText">FULLNAME</p>
          <input id="subName" type="text" placeholder="Enter Your Name" />
          <p id="subText">EMAIL ADDRESS</p>
          <input
            id="subName"
            type="text"
            placeholder="Enter your email address"
          />
          <button id="subBtn" type="submit">
            Subscribe
          </button>

          {/* <error id='subError'>
                {errors.newPassword?.type === "required" && "*Enter your password"}
              </error> */}
        </form>
      </div>
    </div>
  );
};

export default Subscription;
