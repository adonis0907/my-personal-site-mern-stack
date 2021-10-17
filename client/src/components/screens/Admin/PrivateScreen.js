import {useState,useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDollarSign,faEye,faShoppingCart,faHome,faSearch,faUsers,faComment,faQuestionCircle,faCog,faLock,faSignOutAlt,faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import img1 from '../../images/me.webp'

import './PrivateScreen.css'


function toggleMenu(){
  let toggle = document.querySelector('.admin__topbar')
  let navigation = document.querySelector('.admin__navigation')
  let main = document.querySelector('.admin__main')

  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
  main.classList.toggle('active')

}
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



      </div>
    </div>
    <div className="admin__main">
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
          <div className="admin__details">
            <div className="admin__recentOrder">
              <div className="admin__cardHeader">
                <h2>Recent Orders</h2>
                <a href="#" className="admin__btn">View all</a>
              </div>
            </div>

            <div className="admin__recentCustomers">
            <div className="admin__cardHeader">
              <h2>Recent Customers</h2>
              <a href="#" className="admin__btn">View all</a>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td><span className="admin__status admin__delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Window Coolers</td>
                  <td>$120</td>
                  <td>Due</td>
                  <td><span className="admin__status admin__pending">pending</span></td>
                </tr>
                <tr>
                  <td>Speakers</td>
                  <td>$600</td>
                  <td>Paid</td>
                  <td><span className="admin__status admin__return">Return</span></td>
                </tr>
                <tr>
                  <td>Hp Laptop</td>
                  <td>$6000</td>
                  <td>Due</td>
                  <td><span className="admin__status admin__inporgress">In Progress</span></td>
                </tr>

                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td><span className="admin__status admin__delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Window Coolers</td>
                  <td>$120</td>
                  <td>Due</td>
                  <td><span className="admin__status admin__pending">pending</span></td>
                </tr>
                <tr>
                  <td>Speakers</td>
                  <td>$600</td>
                  <td>Paid</td>
                  <td><span className="admin__status admin__return">Return</span></td>
                </tr>
                <tr>
                  <td>Hp Laptop</td>
                  <td>$6000</td>
                  <td>Due</td>
                  <td><span className="admin__status admin__inporgress">In Progress</span></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
    {/*<div style={{background:"green", color:"white"}}>PrivateData:{privateData}</div>
    <button onClick={logoutHandler}>Logout</button>*/}

    </>

  )
}

export default PrivateScreen
