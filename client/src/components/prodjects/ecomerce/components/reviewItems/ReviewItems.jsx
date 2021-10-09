import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReviewItems.css'
const ReviewItems = ({img,star1,star2,star3,star4,star5,text,name}) => {
  return (

        <div className="ecom__review-box swiper-slide">
          <img src ={img} alt=""/>
          <p>{text}</p>
          <h3>{name}</h3>
          <div className="ecom__review-stars">
          <FontAwesomeIcon icon={ star1 }/>
          <FontAwesomeIcon icon={ star2 }/>
          <FontAwesomeIcon icon={ star3 }/>
          <FontAwesomeIcon icon={ star4 }/>
          <FontAwesomeIcon icon={ star5 }/>
          </div>
        </div>
  )
}

export default ReviewItems
