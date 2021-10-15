import {useState,useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faUsers,faComment,faQuestionCircle,faCog,faLock,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import img1 from '../../images/me.webp'

import './PrivateScreen.css'



const PrivateScreen = ({history}) => {
  const [error,setError] =useState("")
  const [privateData,setPrivateData]=useState("");

  useEffect(()=>{
    if(!localStorage.getItem("authToken")){
      history.push("/login")
    }
    const fetchPrivateData = async () =>{
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try{
        const {data} = await axios.get("/api/private",config)

        setPrivateData(data.data)

      }catch(error){

        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }

    fetchPrivateData()
  },[history])

  const logoutHandler=()=>{
    localStorage.removeItem("authToken")
    history.push("/login")
  }
  return (
    error? <span className="error-message">{error}</span>
    :
    <>
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
            <Link to="/" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faUsers} /></span>
              <span className="admin__title">Customers</span>
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
        <div className="admin__main">
            <div className="admin__topbar">
              <div className="admin__toggle">
                <div className="admin__search">
                  <label>
                    <input type="text" placeholder="Search here" />
                  </label>
                  <div className="admin__user">
                    <img src={img1} alt="profile"/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

      <div style={{background:"green", color:"white"}}>PrivateData:{privateData}</div>
      <button onClick={logoutHandler}>Logout</button>
    </>

  )
}

export default PrivateScreen
