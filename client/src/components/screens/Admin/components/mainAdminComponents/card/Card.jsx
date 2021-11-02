import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDollarSign,faEye,faShoppingCart,faComment} from '@fortawesome/free-solid-svg-icons';

import "./Card.css"
const Card = () => {
  return (
    <div className="admin__cardBox">
        <div className="admin__card">
          <div>
            <div className="admin__numbers">1,042</div>
            <div className="admin__cardName">Daily views</div>
          </div>
          <div className="admin__iconBox"><FontAwesomeIcon icon={faEye}/></div>
        </div>


        <div className="admin__card">
          <div>
            <div className="admin__numbers">82</div>
            <div className="admin__cardName">Sales</div>
          </div>
          <div className="admin__iconBox"><FontAwesomeIcon icon={faShoppingCart}/></div>
        </div>


        <div className="admin__card">
          <div>
            <div className="admin__numbers">200</div>
            <div className="admin__cardName">Comments</div>
          </div>
          <div className="admin__iconBox"><FontAwesomeIcon icon={faComment}/></div>
        </div>


        <div className="admin__card">
          <div>
            <div className="admin__numbers">$6,042</div>
            <div className="admin__cardName">Earnings</div>
          </div>
          <div className="admin__iconBox"><FontAwesomeIcon icon={faDollarSign}/></div>
        </div>


    </div>
  )
}

export default Card
