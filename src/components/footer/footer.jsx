import React, { Component } from 'react'
import "./footer.css"
import {RiFacebookCircleFill} from "react-icons/ri"
import {AiOutlineTwitter, AiFillInstagram} from "react-icons/ai"
import { Link  } from 'react-router-dom'
import logo from '../../images/logo.svg'
import {RiSendPlaneFill} from 'react-icons/ri'

class Footer extends Component {
  state = { 
    footerList: [ "About us", "FAQ", "Subscription"],
    footerMid: [ "Corporate Relation", "Contact us", "Help Center"],
    permalinks: [ "AiFillInstagram", "AiOutlineTwitter", "RiFacebookCircleFill"]
   } 
  
  render() { 
    return (
      <section id='footer'>
      <div className="footer_container">
        <div className='footer_logo'>  
        <img src={logo} alt="logo" />
        </div>
  
      <ul className='footer-permalinks'>
      <h3 id='footer-header'>About us</h3>{this.state.footerList.map(footerList => <li>{footerList}</li>)} </ul>
  
       <ul className='footer-mid-links'>
       <h3 id='footer-header'>Contact us</h3>{this.state.footerMid.map(footerMid => <li>{footerMid}</li>)}</ul>
      </div>

     <div className="footerRight">
     <h3 className="txt">Subscribe to Newsletter</h3>
        <div className="subscribe-box">    
        <input type="email" placeholder="Enter your email..."/>
        <RiSendPlaneFill id='send-subscribe'/>
     </div>
  
      <div className="footer-socials" id='socials'>
        <Link to="https://www.instagram.com/unicusdesigns_/" className="permalinks"><AiFillInstagram/></Link>
        <Link to="https://www.behance.net/UNICUSDESIGNS" className="permalinks"><AiOutlineTwitter/></Link>
        <Link to="https://www.linkedin.com/in/ebenezer-omani-clottey/" className="permalinks"><RiFacebookCircleFill/></Link>
      </div>
  
       <p id= 'footer-copyright'>
              &copy; 2022. 
              <em>Movie Database Inc.</em>
        </p>
  
      </div>
      </section>
   
    )
  }
    
  }

 
export default Footer;