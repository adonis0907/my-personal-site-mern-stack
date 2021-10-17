import React from 'react'
import './PortfolioItem.css'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendar
 } from '@fortawesome/free-solid-svg-icons';

const PortfolioItem = ({data}) => {
  return (
    <div className="main__blog1-box-container">

    {
      data.map((item)=>{
        return<div className="main__portfolio-box" key={item.id}>
            <img src={item.image} alt="img1" />
            <div className="main__portfolio-content">
              <div className="main__portfolio-icons">
                  <Link to="/" className="link"><FontAwesomeIcon icon={ faUser }/> by user</Link>
                  <Link to="/" className="link"><FontAwesomeIcon icon={ faCalendar }/> 1st may, 2021</Link>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button className="main__blog-btn">read more</button>
            </div>
            </div>
      })
    }




    </div>
  )
}

export default PortfolioItem
