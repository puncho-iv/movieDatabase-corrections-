import React from 'react'
import { Link } from 'react-router-dom';
import './reset.css'
import logo from '../../images/logo.svg'
import Footer from '../footer/footer'
import resetImage from '../../images/resetImage.jpg'

const Reset = () => {

  return (
    <section id= 'reset'>
      <div className="reset_container">
        <h3 id='reset_header'>Reset Account</h3>  
          <img src={logo} alt="signup_logo"/>     
      </div>

      <p className='reset-note'>
        Enter the email or mobile number you  <br/> used in creating this acccount!
      </p>

      <div className="reset-image" id='log-image'>
         <img src={ resetImage } alt='reset-img' className='reset-image-column'  />
            <div className="reset-content">
             <h1>Don't get logged out again</h1>
                <p>Lorem ipsum..</p>
            </div>
          </div>

      <form className='reset-form'>
      <div className="user-label" id='user-textbox'>
          <label className='signin-label'>Username / Email Address</label>
            <input className="user-input" 
                   type="text" 
                   name="name"  
                   required                 
             />
          </div>

      
        <button className="reset-btn" id='reset-submit-btn'>
              <Link to="/reset" className='reset-btn-text'>Continue</Link>
            </button>
      </form>

      <Footer/>
    </section>
  )
}

export default Reset
