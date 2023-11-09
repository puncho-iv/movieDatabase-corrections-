import React from "react";
import "./startup.css";
import logo from "../../images/logo.svg";
import img from "../../images/img.svg";
import google from "../../images/google.png";
import apple from "../../images/apple.png";
import { Link } from "react-router-dom";

const Startup = () => {
  return (
    <section id="startup">
      <div className="left-pane">
        <img src={img} alt="background" id="bg-img" />
      </div>

      <div className="right-pane">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Join the movie people today</h3>
        </div>

        <div className="links-container">
          <Link to="/signup">
            <button id="signin-btn">
              <img src={google} alt="google logo" className="custom-btn-img" />
              Sign up with Google
            </button>
          </Link>

          <Link to="/signup">
            <button id="signin-btn">
              <img src={apple} alt="apple logo" className="custom-btn-img" />
              Sign up with Apple
            </button>
          </Link>

          <h3 id="signin-divider">OR</h3>

          <Link to="/signin" className="">
            <button className="mobile-btn">
              Sign up with Mobile
            </button>
          </Link>

          <p className="privacy">
            By signing up, you agree to the <em>Terms of Service </em> and{" "}
            <em> Privacy Policy,</em> including <em> Cookie Use</em>.
          </p>
        </div>

        <div className="signin-alt">
          <h4> Already have an account?</h4>

          <Link to="/signin">
            <button id="signin-btn">Sign in</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Startup;
