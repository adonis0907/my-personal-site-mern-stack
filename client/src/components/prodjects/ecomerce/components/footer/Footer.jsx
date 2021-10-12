import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'
import img from '../../images/payment.png'
import {
faShoppingBasket,
faArrowRight,
faPhone,
faEnvelope,
faMapMarkedAlt


 } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <section className="ecom__footer">
    <div className="ecom_footer-box-container">
      <div className="ecom_footer-box">
        <h3> groco <FontAwesomeIcon icon={faShoppingBasket}/> </h3>
        <p>this is a problem of footer yari yarah . and so on an so forth</p>
        <div className="share">
          <a href="facebook.com"><FontAwesomeIcon icon={faShoppingBasket}/></a>
          <a href="facebook.com"><FontAwesomeIcon icon={faShoppingBasket}/></a>
          <a href="facebook.com"><FontAwesomeIcon icon={faShoppingBasket}/></a>
          <a href="facebook.com"><FontAwesomeIcon icon={faShoppingBasket}/></a>

        </div>
      </div>



      <div className="ecom_footer-box">
        <h3> contact info </h3>
        <a href="#" className="link"><FontAwesomeIcon icon={faPhone}  />+237-653-255-547</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faPhone}  />+237-651-841-003</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faEnvelope}  />msiysinyuy@gmail.com</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faMapMarkedAlt}  />Cameroon|Buea</a>

      </div>

      <div className="ecom_footer-box">
        <h3> quick links </h3>
        <a href="#" className="link"><FontAwesomeIcon icon={faArrowRight}  />home</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faArrowRight}  />feature</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faArrowRight}  />products</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faArrowRight}  />categories</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faArrowRight}  />review</a>
        <a href="#" className="link"><FontAwesomeIcon icon={faArrowRight}  />blogs</a>

      </div>
      <div className="ecom_footer-box">
        <h3> newsletter </h3>
        <p>subscribe for latest updates</p>
        <input type="email" className="ecom__email" placeholder="Your email" />
        <input type="submit" value="subscribe" className="ecom__footer-btn" />
        <img src={img} alt="" className="ecom__payment-img"/>

      </div>


    </div>
    <div className="ecom__credit"> created by <span>mr. Mohamad siysinyuy </span> | all rights reserved</div>
    </section>
  )
}

export default Footer
