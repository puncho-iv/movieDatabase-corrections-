import React from "react";
import logo from "../../images/logo.svg";
import "./subscription.css";
import Left from "../../images/left.png";
import { BsCheck2, BsBookmarkStarFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Subscription = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="leftSubscribe">
      <div className="col1">
        <img src={logo} alt="background" id="subLogo" />
        <img src={Left} alt="background-img" id="leftImg" />
        <ul id="list">
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

        <form className="subForm" onSubmit={handleSubmit(onSubmit)}>
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
            type="email"
            name="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <error id='subError'>
                {errors.newPassword?.type === "required" && "*Enter your password"}
              </error>

            <Link to = "/home">
            <button id="subBtn">
            Subscribe
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
