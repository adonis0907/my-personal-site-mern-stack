import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'
import {LinkedIn,GitHub,Facebook,Twitter} from '@material-ui/icons'
import img from '../images/payment.png'
import {

faArrowRight,
faPhone,
faEnvelope,
faMapMarkedAlt


 } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <section className="main__footer">
    <div className="main_footer-box-container">
      <div className="main_footer-box">
        <h3> MrSuber  </h3>
        <p>this is a problem of footer yari yarah . and so on an so forth</p>
        <div className="share">
          <a href="https://www.linkedin.com/in/mohamad-siysinyuy-26154215b/"><LinkedIn/></a>
          <a href="https://github.com/mrsuber"><GitHub/></a>
          <a href="https://www.facebook.com/mohamad.siysinyuy/"><Facebook/></a>
          <a href="https://twitter.com/msiysinyuy"><Twitter/></a>

        </div>
      </div>



      <div className="main_footer-box">
        <h3> contact info </h3>
        <a href="#" className="link"><FontAwesomeIcon icon={faPhone}  />+237-653-255-547</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faPhone}  />+237-651-841-003</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faEnvelope}  />msiysinyuy@gmail.com</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faMapMarkedAlt}  />Cameroon|Buea</a>

      </div>

      <div className="main_footer-box">
        <h3> quick links </h3>
        <a href="#" className="link"><FontAwesomeIcon icon={faArrowRight}  />home</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faArrowRight}  />prodjects</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faArrowRight}  />resume</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faArrowRight}  />site index</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faArrowRight}  />contact</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faArrowRight}  />Dashbourd</a>

      </div>
      <div className="main_footer-box">
        <h3> newsletter </h3>
        <p>subscribe for latest updates</p>
        <input type="email" className="main__email" placeholder="Your email" />
        <input type="submit" value="subscribe" className="main__footer-btn" />
        <img src={img} alt="" className="main__payment-img"/>

      </div>


    </div>
    <div className="main__credit"> Created By <span>Mr. Mohamad siysinyuy </span> | All Rights Reserved</div>
    </section>
  )
}

export default Footer
