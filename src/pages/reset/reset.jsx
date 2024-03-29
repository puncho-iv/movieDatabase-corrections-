import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./reset.css";
import { MdEmail } from "react-icons/md";
import logo from "../../images/logo.svg";
import Footer from "../../components/footer/footer";
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

  const [resetPass, setResetPass] = useState(false);
  const [, setResetForm] = useState(false);

  const resetPassfrm = () => {
    setResetPass(!resetPass);
    setResetForm((resetForm) => !resetForm);
  };

  return (
    <section id="reset">
      <div className="reset-image">
        <img src={resetImage} alt="reset-img" className="bg-img" />
      </div>

      <div className="reset-col2">
        <div className="reset_logo">
          <img src={logo} alt="signup_logo" />
        </div>
        <h3 id="reset_header">Reset Account</h3>
        {!resetPass && (
          <form className="resetForm" onClick={handleSubmit(onSubmit)}>
            
            <label className="resetLabel">Email Address</label>
            <input
              className="reset-input"
              type="text"
              // placeholder="Enter your email address"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />
            {/* <MdEmail id="resetEmail" /> */}
            <error id="resetError">
              {errors.email?.type === "required" && "*Email is required"}
            </error>

            <button className="reset-btn" onClick={resetPassfrm}>
              Next
            </button>
          </form>
        )}

        {resetPass && (
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
        )}
      </div>
      {/* <Footer /> */}
    </section>
  );
}

export default Reset;
