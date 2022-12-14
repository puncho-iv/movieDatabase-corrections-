import React from "react"
import "./footer.css"
import {RiFacebookCircleFill} from "react-icons/ri"
import {AiOutlineTwitter, AiFillInstagram} from "react-icons/ai"
import { Link  } from 'react-router-dom'
import logo from '../../images/logo.svg'
import {RiSendPlaneFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <section id='footer'>

    <div className="footer_container">
      <div className='footer_logo'>  
      <img src={logo} alt="logo" />
      </div>

    <ul className='footer-permalinks'>
    <li><h3 id='footer-header'>About us</h3></li>
     <li> <Link to='/about' id='footer-menu'>FAQ</Link></li>
     <li><Link to='/about' id='footer-menu'>Corporate Relation</Link></li>
     <li><Link to='/about' id='footer-menu'>Help Center</Link></li>
     </ul>

     <ul className='footer-mid-links'>
     <li><h3 id='footer-header'>Contact us</h3></li>
     <li> <Link to='/about' id='footer-menu'>FAQ</Link></li>
     <li><Link to='/about' id='footer-menu'>Corporate Relation</Link></li>
     <li><Link to='/about' id='footer-menu'>Help Center</Link></li>
     </ul>

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

export default Footer