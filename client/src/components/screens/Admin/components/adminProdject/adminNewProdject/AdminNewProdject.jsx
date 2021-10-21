import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import AdminHeader from '../../adminHeader/AdminHeader'
import AdminSideBar from '../../adminSideBar/AdminSideBar'
import AdminFooter from '../../adminFooter/AdminFooter'
import img from '../../../../../images/boxed-bg.jpg'
import {Publish} from "@material-ui/icons"

import './AdminNewProdject.css'

const AdminNewProdject = ({history}) => {
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
    <div className="newAdminProdject">
      <h1 className="newAdminProdjectTitle">New AdminProdject</h1>
      <form className="newAdminProdjectForm">
          <div className="newAdminProdjectItem newAdminBorder">
            <label>Title</label>
            <input type="text" placeholder="The Venus Prodject"/>
          </div>

          <div className="newAdminProdjectItem newAdminBorder">
            <label>Sub Title</label>
            <input type="text" placeholder="Save Mankind"/>
          </div>

          <div className="newAdminProdjectItem newAdminBorder">
            <label>Description</label>
            <input type="textarea" placeholder="This prodject is to save ...."/>
          </div>

          <div className="newAdminProdjectItem newAdminBorder">
            <label>Prodject Status</label>
            <input type="text" placeholder="Complete" />
          </div>

          <div className="newAdminProdjectItem newAdminBorder">
            <label>References</label>
            <input type="text" placeholder="Help.com" />
          </div>
          <div className="newAdminProdjectItem newAdminBorder">
            <label>Contributors</label>
            <input type="text" placeholder="Mohamad Siysinyuy"/>
          </div>

          
          <div className="newAdminProdjectItem">
            <label>Active</label>
            <select className="newAdminProdjectSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

            <div className = "adminProdjectUpdateUpload">
              <img className="adminProdjectUpdateImg" src="https://i.pinimg.com/originals/af/1c/c3/af1cc3fa780eddc7c91a70f9e836b12c.jpg" alt=""/>
              <label htmlFor="file"><Publish className="adminProdjectUpdateIcon"/></label>
              <input type="file" id="file" style={{display:"none"}}/>
            </div>

          <button className="newAdminProdjectButton">Create</button>

      </form>
    </div>
    </div>
    <AdminFooter />
    </div>
      </>
  )
}

export default AdminNewProdject
