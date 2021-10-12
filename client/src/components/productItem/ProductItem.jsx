import React from 'react'
import './ProductItem.css'




const ProductItem = ({title,product,text}) => {
  return (
    <div className="landing__product-box swiper-slide">
        <img src={product} alt="product1" />

        <h3>{title}</h3>
        <p>{text}</p>
        <button href="#" className="landing__product-btn link">Check it out </button>
    </div>
  )
}

export default ProductItem
