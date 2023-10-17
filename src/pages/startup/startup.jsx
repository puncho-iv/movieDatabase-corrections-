import React from 'react'
import './startup.css'
import logo from '../../images/logo.svg'
import img from '../../images/img.svg'
import google from '../../images/google.png'
import apple from '../../images/apple.png'
import { Link } from 'react-router-dom'

const Startup = () => {

  return (
    <section id='startup'>

        <div className='left-pane'>
          <img src={img} alt="background" id='bg-img' />
        </div>

        <div className='right-pane'>
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3>Join the movie people today</h3>
          </div>

          <div className="links-container">
            
            <div className="custom-btn">
              <img src={google} alt="google logo" className="custom-btn-img" />
              <Link to="/signup" className='custom-btn-text'>Sign up with Google</Link>
            </div>

            <button className="custom-btn" id='apple-signin-btn'>
              <img src={apple} alt="apple logo" className="custom-btn-img" />
              <Link to="/signup" className='custom-btn-text'>Sign up with Apple</Link>
            </button>
            
            <h3 id='signin-divider'>OR</h3>

            <button className="custom-btn" id='mobile-signin-btn'>
              <Link to="/signin" className='custom-btn-text'>Sign up with Mobile</Link>
            </button>

            <p className="privacy">
              By signing up, you agree to the <em>Terms of Service </em> and <em> Privacy Policy,</em> including <em> Cookie Use</em>.
            </p>



          </div>
          <div className="signin-alt">
              Already have an account?
            </div>

            <button className="custom-btn" id='signin-btn'>
              <Link to="/signin" className='custom-btn-text'>Sign in</Link>
            </button>
        </div>

    </section>
  )
}

export default Startup
