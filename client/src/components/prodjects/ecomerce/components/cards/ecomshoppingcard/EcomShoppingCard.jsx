import React from 'react'
import './EcomShoppingCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const EcomShoppingCard = ({icon,img,alt,title,price,qty}) => {
  return (

        <div className="ecom__box">
        <FontAwesomeIcon icon={ icon }/>
          <img src={img} alt={alt} />
          <div className="ecom__content">
              <h3>{title}</h3>
              <span className="ecom__price">${price}/-</span>
              <span className="ecom__quantity">qty : {qty}</span>
          </div>
        </div>

  )
}

export default EcomShoppingCard
