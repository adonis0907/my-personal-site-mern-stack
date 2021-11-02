import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTable,faDollarSign,faEye,faShoppingCart,faHome,faSearch,faUsers,faComment,faQuestionCircle,faCog,faLock,faSignOutAlt,faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({logoutHandler}) => {
  return (
    <div className="admin">
      <div className="admin__container">
        <div className="admin__navigation">
          <ul>
            <li>
            <Link to="/" className="link">
              <span className="admin__icon"></span>
              <span className="admin__title"><h2>MrSuber Admin</h2></span>
              </Link>
            </li>

            <li>
            <Link to="/" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faHome} /></span>
              <span className="admin__title">Dashboard</span>
              </Link>
            </li>
            <li>
            <Link to="/users" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faUsers} /></span>
              <span className="admin__title">Users</span>
              </Link>
            </li>
            <li>
            <Link to="/prodjects" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faTable} /></span>
              <span className="admin__title">Prodjects</span>
              </Link>
            </li>
            <li>
            <Link to="/" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faComment} /></span>
              <span className="admin__title">Message</span>
              </Link>
            </li>
            <li>
            <Link to="/" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faQuestionCircle} /></span>
              <span className="admin__title">Help</span>
              </Link>
            </li>
            <li>
            <Link to="/" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faCog} /></span>
              <span className="admin__title">Settings</span>
              </Link>
            </li>

            <li>
            <Link to="/" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faLock} /></span>
              <span className="admin__title">Password</span>
              </Link>
            </li>

            <li onClick={logoutHandler}>
            <Link to="/" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faSignOutAlt} /></span>
              <span className="admin__title">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>



      </div>
    </div>
  )
}

export default Sidebar
