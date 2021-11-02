import {useState,useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDollarSign,faEye,faShoppingCart,faHome,faSearch,faUsers,faComment,faQuestionCircle,faCog,faLock,faSignOutAlt,faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import img1 from '../../images/me.webp'
import {Sidebar,Topbar,Card} from './components'

import './PrivateScreen.css'


function toggleMenu(){
  let toggle = document.querySelector('.admin__topbar')
  let navigation = document.querySelector('.admin__navigation')
  let main = document.querySelector('.admin__main')

  toggle.classList.toggle('admin__active')
  navigation.classList.toggle('admin__active')
  main.classList.toggle('admin__active')

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
    <Sidebar logoutHandler={logoutHandler} />
    <div className="admin__main">
        <Topbar toggleMenu={toggleMenu} />

        <Card/>
          <div className="admin__details">
            <div className="admin__recentOrder">
              <div className="admin__cardHeader">
                <h2>Recent Orders</h2>
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
                  <tr>
                    <td>Apple Watch</td>
                    <td>$600</td>
                    <td>paid</td>
                    <td><span className="admin__status admin__delivered">Delivered</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="admin__recentCustomers">
            <div className="admin__cardHeader">
              <h2>Recent Customers</h2>
            </div>
            <table>
              <tbody>
                <tr>
                  <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
                  <td><h4>David<br/><span>Italy</span></h4></td>
                </tr>

                <tr>
                  <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
                  <td><h4>Mohamad<br/><span>Cameroon</span></h4></td>
                </tr>

                <tr>
                  <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
                  <td><h4>Amelia<br/><span>France</span></h4></td>
                </tr>

                <tr>
                  <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
                  <td><h4>Olivia<br/><span>USA</span></h4></td>
                </tr>

                <tr>
                  <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
                  <td><h4>Admit<br/><span>Japan</span></h4></td>
                </tr>
                <tr>
                  <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
                  <td><h4>Ashraf<br/><span>India</span></h4></td>
                </tr>
                <tr>
                  <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
                  <td><h4>Dian<br/><span>Malasia</span></h4></td>

                </tr>
                <tr>
                  <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
                  <td><h4>Amit<br/><span>India</span></h4></td>
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
