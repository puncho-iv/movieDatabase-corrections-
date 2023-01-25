import React, { useState } from "react";
import "./signin.css";
import logo from "../../images/logo.svg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { GoSignIn } from "react-icons/go";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import asset from "../../images/asset.jpg";
import { useForm } from "react-hook-form";

function Signin() {
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
    <section id="signin">
      <div className="signin-col1">
        <img src={logo} alt="logo" />

        <div className="links">
        <Link to="/signup" className="sign-up-link">
          New User?
          <em> Sign up now</em>
        </Link>
        </div>
       
        <div className="signin-content">
        <img src={asset} alt="signin-left-pane" className="left-column-img" />
          <h1>Come in and see all the new movies...</h1>
          <p>Lorem ipsum..</p>
        </div>

        <div className="col2">
          <h1 id="signin-header">Sign In</h1>
          <form
            className="form_signin"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete="off"
          >
          <div className="user_details">
           <label className="signin-label">EMAIL ADDRESS</label>
              <input
                className="user-input"
                type="email"
                placeholder="Enter your username..."
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
              />
              <MdEmail className="email_image" />
              <error id="error">
                {errors.email?.type === "required" && "*Enter email address"}
              </error>
              </div>
           
           <label className="signin-label2">PASSWORD</label>
              <input
                className="user-input1"
                type={type}
                name="newPassword"
                placeholder="Enter your password..."
                {...register("newPassword", {
                  required: true,
                  minLength: 5,
                  maxLength: 20,
                })}
              />
              <RiLockPasswordFill className="password_image" />
              <span id="pwd_eye" onClick={handleToggle}>
                <AiFillEye icon={icon} size={18} />
              </span>

              {/* <button className='eye' onClick={toggleBtn}>
                {state ? <AiFillEye />:<AiFillEyeInvisible/>}
              </button> */}

              <error id="new">
                {errors.newPassword?.type === "required" &&
                  "*Enter your password"}
              </error>
           
           

            <div className="bottom">
              <h3 id="remember">Remember me</h3>
              <input type="checkbox" id="bottom-links-checkbox" />

              <div className="bottom-links">
                <Link to="/reset" className="forgotten">
                  Forgotten Password?
                </Link>
              </div>
            </div>

            <div>
              <button className="button-signin" Link to="/home" type="submit" >Submit</button>
            </div>
          </form>
        </div>
     </div>
    </section>
  );
}

export default Signin;
