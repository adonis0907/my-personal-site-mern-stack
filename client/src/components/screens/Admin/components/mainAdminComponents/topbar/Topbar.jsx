import React from 'react'
import './Topbar.css'
import img1 from '../../../../../images/me.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons';



const Topbar = ({toggleMenu}) => {
  return (
    <div className="admin__topbar">
      <div className="admin__toggle" onClick={toggleMenu}><FontAwesomeIcon icon={faBars}/></div>
        <div className="admin__search">
          <label>
            <input type="text" placeholder="Search here" />
            <FontAwesomeIcon icon={faSearch}/>
          </label>

        </div>
        <div className="admin__user">
          <img src={img1} alt="profile"/>
        </div>
      </div>
  )
}

export default Topbar
