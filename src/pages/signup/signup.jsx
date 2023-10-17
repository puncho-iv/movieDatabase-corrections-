import React, { useState } from "react";
import "./signup.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import signinPoster from "../../images/signinPoster.png";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(AiFillEyeInvisible);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(AiFillEye);
      setType("text");
    } else {
      setIcon(AiFillEyeInvisible);
      setType("password");
    }
  };

  return (
    <section id="signup">
      <div className="left-column">
        <div className="column">
          <img
            src={signinPoster}
            alt="signin-left-pane"
            className="left-side-image"
          />
          <div className="content">
            <h1>Watch it all here first</h1>
            {/* <p>Lorem ipsum..</p> */}
          </div>
        </div>

        <div></div>

        <Link to="/signin" className="signup-btn-link">
          Sign In
        </Link>
      </div>

      <div className="right-column">

      <div className="logo-signup">
          <img src={logo} alt="logo" />
        </div>

      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 id="createAccount">Create Account!</h3>

        <div className="signup-label" id="signup-textbox">
          <label className="user-email">EMAIL ADDRESS</label>
          <input
            className="signup-input-email"
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <error id="emailErr">
            {errors.email?.type === "required" && "*Email is required"}
          </error>
        </div>

        <div className="signup-label" id="password-textbox">
          <label className="user-password">PASSWORD</label>
          <input
            className="signup-input-password"
            type={type}
            name="new_password"
            {...register("newPassword", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />

          <span id="pwdEye" onClick={handleToggle}>
            <AiFillEye icon={icon} size={18} />
          </span>

          <error id="choose">
            {errors.newPassword?.type === "required" && "*Choose a password"}
          </error>
        </div>

        <div className="signup-label" id="confirm-password-textbox">
          <label className="user-confirm">CONFIRM PASSWORD</label>
          <input
            className="signup-input-confirm"
            type="password"
            name="confirm_password"
            {...register("confirmPassword", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          <error id="confirm">
            {errors.confirmPassword?.type === "required" &&
              "*Password does not match"}
          </error>
        </div>
        <div>
          <button Link to="/signin" className="button" type="submit">
            Sign up
          </button>
        </div>
      </form>
      </div>
    </section>
  );
}

export default Signup;
