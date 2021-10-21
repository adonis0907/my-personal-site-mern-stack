import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import AdminHeader from '../../adminHeader/AdminHeader'
import AdminSideBar from '../../adminSideBar/AdminSideBar'
import AdminFooter from '../../adminFooter/AdminFooter'
import img from '../../../../../images/boxed-bg.jpg'
import img1 from '../../../../../images/portImages/netflix2.png'
import {PermIdentity,Publish,CalendarToday,PhoneAndroid,MailOutline,LocationSearching} from "@material-ui/icons"
import {Link} from 'react-router-dom'

const AdminEditUser = ({history}) => {
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
    <div className="wrapper" >
    <AdminHeader logoutHandler={logoutHandler} />

    <AdminSideBar />
    <div className="content-wrapper" style={{background: `url(${img}) repeat fixed`}}>

    <div className="adminProdject">
        <div className="adminProdjectTitleContainer">
        <h1 className="adminProdjectTitle">Edit User</h1>
        <Link to="/adminNewUser">
        <button className="adminProdjectAddButton">Create</button>
        </Link>
        </div>
        <div className="adminProdjectContainer">
          <div className="adminProdjectShow">
            <div className="adminProdjectShowTop">
              <img src="https://i.pinimg.com/originals/af/1c/c3/af1cc3fa780eddc7c91a70f9e836b12c.jpg" alt="" className="adminProdjectShowImg"/>
              <div className="adminProdjectShowTopTitle">
                <span className="adminProdjectShowUsername">Mohamad Siysinyuy</span>
                <span className="adminProdjectShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="adminProdjectShowBottom">
              <span className="adminProdjectShowTitle">Account Details</span>
              <div className="adminProdjectShowInfo">
              <PermIdentity className="adminProdjectShowIcon" />
              <span className="adminProdjectShowInfoTitle">suber911</span>
              </div>



              <div className="adminProdjectShowInfo">
              <CalendarToday className="adminProdjectShowIcon" />
              <span className="adminProdjectShowInfoTitle">02-12-1994</span>
              </div>

              <span className="adminProdjectShowTitle">Contact Details</span>
              <div className="adminProdjectShowInfo">
              <PhoneAndroid className="adminProdjectShowIcon" />
              <span className="adminProdjectShowInfoTitle">+237 653 255 47</span>
              </div>

              <div className="adminProdjectShowInfo">
              <MailOutline className="adminProdjectShowIcon" />
              <span className="adminProdjectShowInfoTitle">msiysinyuy@gmail.com</span>
              </div>

              <div className="adminProdjectShowInfo">
              <LocationSearching className="adminProdjectShowIcon" />
              <span className="adminProdjectShowInfoTitle">Buea | Cameroon</span>
              </div>
            </div>
          </div>
          <div className="adminProdjectUpdate">
            <span className="adminProdjectUpdateTitle">Edit</span>
            <form  className="adminProdjectUpdateForm">
              <div className="adminProdjectUpdateLeft">
                <div className="adminProdjectUpdateItem">
                    <label>Username</label>
                    <input type="text" placeholder="suber911" className="adminProdjectUpdateInput"/>
                </div>

                <div className="adminProdjectUpdateItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Mohamad Siysinyuy" className="adminProdjectUpdateInput"/>
                </div>

                <div className="adminProdjectUpdateItem">
                    <label>Email</label>
                    <input type="email" placeholder="msiysinyuy@gmail.com" className="adminProdjectUpdateInput"/>
                </div>
                <div className="adminProdjectUpdateItem">
                    <label>Date of Birth</label>
                    <input type="date" placeholder="02-12-1994" className="adminProdjectUpdateInput"/>
                </div>
                <div className="adminProdjectUpdateItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+237 653 255 47" className="adminProdjectUpdateInput"/>
                </div>

                <div className="adminProdjectUpdateItem">
                    <label>Address</label>
                    <input type="usertext" placeholder="Buea | Cameroon" className="adminProdjectUpdateInput"/>
                </div>
                <div className="newAdminUserItem">
                  <label>Status</label>
                  <select className="newAdminUserSelect" name="active" id="active">
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>
              </div>
              <div className="adminProdjectUpdateRight">
                <div className = "adminProdjectUpdateUpload">
                  <img className="adminProdjectUpdateImg" src="https://i.pinimg.com/originals/af/1c/c3/af1cc3fa780eddc7c91a70f9e836b12c.jpg" alt=""/>
                  <label htmlFor="file"><Publish className="adminProdjectUpdateIcon"/></label>
                  <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="adminProdjectUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
    </div>
    <AdminFooter />
    </div>
      </>
  )
}

export default AdminEditUser
