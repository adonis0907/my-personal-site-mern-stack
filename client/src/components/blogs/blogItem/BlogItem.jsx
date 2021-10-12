import React from 'react'
import './BlogItem.css'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const BlogItem = ({img,title,text,icon1,icon2}) => {
  return (
    <div className="main__blog1-box">
        <img src={img} alt="img1" />
        <div className="main__blog1-content">
          <div className="main__blog1-icons">
              <Link to="/" className="link"><FontAwesomeIcon icon={ icon1 }/> by user</Link>
              <Link to="/" className="link"><FontAwesomeIcon icon={ icon2 }/> 1st may, 2021</Link>
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
          <button className="main__blog-btn">read more</button>
        </div>
    </div>
  )
}

export default BlogItem
