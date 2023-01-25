import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./reset.css";
import { MdEmail } from "react-icons/md";
import logo from "../../images/logo.svg";
import Footer from "../footer/footer";
import resetImage from "../../images/resetImage.jpg";
import { useForm } from "react-hook-form";

function Reset() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  //  const [isState, setIsState] = useState(false)

  //  {isState && <Resetpassword/>}

  //  onClick=.
  //  {() => setIsState(!isState)}

  //  const handleClick = event => {

  //   setIsState(current => !current);

  return (
    <section id="reset">
      <div className="reset_container">
        <h3 id="reset_header">Reset Account</h3>
        <img src={logo} alt="signup_logo" />
      </div>

      <div className="reset-image" id="log-image">
        <img src={resetImage} alt="reset-img" className="reset-image-column" />
        <div className="reset-content">
          <h1>Don't get logged out again</h1>
          <p>Lorem ipsum..</p>
        </div>
      </div>

      <div className="reset-col2">
      <form className="resetForm" onClick={handleSubmit(onSubmit)}>
        <label className="resetLabel">Email Address</label>
        <input
          className="reset-input"
          type="text"
          placeholder="Enter your email address"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
          })}
        />
        <MdEmail id="resetEmail" />
        <error id="resetError">
          {errors.email?.type === "required" && "*Email is required"}
        </error>

        <button className="reset-btn">Next</button>
      </form>

      {/* {isState && <resetForm/>}  */}
      
      <form className="resetPass" onSubmit={handleSubmit(onSubmit)}>
        <label className="reset-password">Password</label>
        <input
          className="resetinput"
          type="password"
          name="password"
          {...register("password", {
            required: true,
            minLength: 5,
            maxLength: 20,
          })}
        />
        <error>
          {errors.password?.type ===
            "Entered password is less than 5 characters"}
        </error>

        <button className="reset-btn2">
          <Link to="/reset" id="resetLink">
            Send Code
          </Link>
        </button>
      </form>
      </div>
      <Footer />
    </section>
  );
}

export default Reset;
