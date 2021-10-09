import React from 'react'
import './Reviews.css'
import ReviewItems from '../reviewItems/ReviewItems'
import rev1 from '../../images/pic-1.png'
import rev2 from '../../images/pic-2.png'

import rev3 from '../../images/pic-3.png'

import rev4 from '../../images/pic-4.png'

import {
  faStar,
  faStarHalfAlt
 } from '@fortawesome/free-solid-svg-icons';
const Reviews = () => {
  return (
    <section className="ecom__review" id="ecom__review">
      <h1 className="ecom__heading">customer's<span>review</span></h1>
      <div className="ecom__review-slider swiper">
      <div className="ecom_rewiew-wrapper">
          <ReviewItems
            img={rev1}
            text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."}
            name={"John Doe"}
            star1={faStar}
            star2={faStar}
            star3={faStar}
            star4={faStar}
            star5={faStarHalfAlt}
          />

          <ReviewItems
            img={rev2}
            text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."}
            name={"John Doe"}
            star1={faStar}
            star2={faStar}
            star3={faStar}
            star4={faStar}
            star5={faStarHalfAlt}
          />

          <ReviewItems
            img={rev3}
            text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."}
            name={"John Doe"}
            star1={faStar}
            star2={faStar}
            star3={faStar}
            star4={faStar}
            star5={faStarHalfAlt}
          />

          <ReviewItems
            img={rev4}
            text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."}
            name={"John Doe"}
            star1={faStar}
            star2={faStar}
            star3={faStar}
            star4={faStar}
            star5={faStarHalfAlt}
          />

        



          </div>
      </div>
    </section>
  )
}

export default Reviews
