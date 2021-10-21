import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import AdminHeader from '../../adminHeader/AdminHeader'
import AdminSideBar from '../../adminSideBar/AdminSideBar'
import AdminFooter from '../../adminFooter/AdminFooter'
import img from '../../../../../images/boxed-bg.jpg'
import {Publish} from "@material-ui/icons"

import './NewUser.css'

const NewUser = ({history}) => {
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
    <div className="newAdminUser">
      <h1 className="newAdminUserTitle">New User</h1>
      <form className="newAdminUserForm">
          <div className="newAdminUserItem newAdminUserBorder">
            <label>Username</label>
            <input type="text" placeholder="suber911"/>
          </div>

          <div className="newAdminUserItem newAdminUserBorder">
            <label>Full Name</label>
            <input type="text" placeholder="Mohamad Siysinyuy"/>
          </div>

          <div className="newAdminUserItem newAdminUserBorder">
            <label>Email</label>
            <input type="email" placeholder="msiysinyuy@gmail.com"/>
          </div>

          <div className="newAdminUserItem newAdminUserBorder">
            <label>Password</label>
            <input type="password" placeholder="password"/>
          </div>

          <div className="newAdminUserItem newAdminUserBorder">
            <label>Phone</label>
            <input type="text" placeholder="+237 653 255 47"/>
          </div>
          <div className="newAdminUserItem newAdminUserBorder">
            <label>Address</label>
            <input type="text" placeholder="Buea | Cameroon"/>
          </div>

          <div className="newAdminUserItem">
            <label>Gender</label>
            <div className="newAdminUserGender">
            <input type="radio" name="gender" id="male" value="male"/>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female"/>
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other"/>
            <label for="other">Other</label>
            </div>

          </div>
          <div className="newAdminUserItem">
            <label>Status</label>
            <select className="newAdminUserSelect" name="active" id="active">
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>


            <div className = "adminProdjectUpdateUpload">
              <img className="adminProdjectUpdateImg" src="https://i.pinimg.com/originals/af/1c/c3/af1cc3fa780eddc7c91a70f9e836b12c.jpg" alt=""/>
              <label htmlFor="file"><Publish className="adminProdjectUpdateIcon"/></label>
              <input type="file" id="file" style={{display:"none"}}/>
            </div>

          <button className="newAdminUserButton">Create</button>

      </form>
    </div>
    </div>
    <AdminFooter />
    </div>
      </>
  )
}

export default NewUser
