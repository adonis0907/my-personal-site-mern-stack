import React from 'react'
import './ProductItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProductItem = ({title,star1,star2,star3,star4,star5,product}) => {
  return (
    <div className="landing__product-box swiper-slide">
        <img src={product} alt="product1" />
        <h1>{title}</h1>
        <div className="landing__product-price">$4.99/- - 10.99/-</div>
        <div className="landing__product-stars">
        <FontAwesomeIcon icon={ star1 }/>
        <FontAwesomeIcon icon={ star2 }/>
        <FontAwesomeIcon icon={ star3 }/>
        <FontAwesomeIcon icon={ star4 }/>
        <FontAwesomeIcon icon={ star5 }/>
        </div>
        <button href="#" className="landing__features-btn link">add to cart </button>
    </div>
  )
}

export default ProductItem
