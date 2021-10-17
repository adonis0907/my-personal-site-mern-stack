import React from 'react'
import './PortfolioItem.css'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GitHub from '@material-ui/icons/GitHub'
// import Pinterest from '@material-ui/icons/Pinterest'
import LinkIcon from '@material-ui/icons/Link';
import {
  faUser,
  faCalendar
 } from '@fortawesome/free-solid-svg-icons';

const PortfolioItem = ({data}) => {
  return (
    <div className="main__portfolio-box-container">

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
              <div className="main__portfolio-btn-container">
              <a href={item.link1} target="__blank" className="main__portfolio-btn link"><GitHub/>GitHub</a>
              <a href={item.link2} target="__blank" className="main__portfolio-btn link"><LinkIcon/>Site</a>
              </div>
            </div>
            </div>
      })
    }




    </div>
  )
}

export default PortfolioItem
