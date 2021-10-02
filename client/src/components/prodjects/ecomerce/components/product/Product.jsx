import React from 'react'
import './Product.css'
import product1 from "../../images/product-1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfAlt
 } from '@fortawesome/free-solid-svg-icons';



const Product = () => {
  return (
    <section className="ecom__products" id="products">
    <h1 className="ecom__heading">Our <span>products</span> </h1>
      <div className="ecom__product-slider">
          <div className="ecom__product-wrapper">
              <div className="ecom__product-box">
                  <img src={product1} alt="product1" />
                  <h1>fresh orange</h1>
                  <div className="ecom__price">$4.99/- - 10.99/-</div>
                  <div className="ecom__stars">
                    <i><FontAwesomeIcon icon={ faStar }/></i>
                    <i><FontAwesomeIcon icon={ faStar }/></i>
                    <i><FontAwesomeIcon icon={ faStar }/></i>
                    <i><FontAwesomeIcon icon={ faStar }/></i>
                    <i><FontAwesomeIcon icon={ faStarHalfAlt }/></i>
                  </div>
                  <a href="#" className="btn">add to cart </a>
              </div>
          </div>
      </div>

    </section>
  )
}

export default Product
