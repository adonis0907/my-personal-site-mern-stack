import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import AdminHeader from '../../adminHeader/AdminHeader'
import AdminSideBar from '../../adminSideBar/AdminSideBar'
import AdminFooter from '../../adminFooter/AdminFooter'
import img from '../../../../../images/boxed-bg.jpg'
import {Publish} from "@material-ui/icons"
import {Link} from 'react-router-dom'
import {Sidebar,Topbar} from "../../../components"

import './AdminEditProdject.css'
const AdminEditProdject = ({history}) => {
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
  function toggleMenu(){
    let toggle = document.querySelector('.admin__topbar')
    let navigation = document.querySelector('.admin__navigation')
    let main = document.querySelector('.admin__main')

    toggle.classList.toggle('admin__active')
    navigation.classList.toggle('admin__active')
    main.classList.toggle('admin__active')

  }
  return (
    error? <span className="error-message">{error}</span>
    :
    <>
    <Sidebar logoutHandler={logoutHandler} />
    
    <div className="admin__main">
        <Topbar toggleMenu={toggleMenu} />
    <div className="adminProdject">
        <div className="adminProdjectTitleContainer">
        <h1 className="adminProdjectTitle">Edit Prodject</h1>
        <Link to="/adminNewProdject">
        <button className="adminProdjectAddButton">Create</button>
        </Link>
        </div>
        <div className="adminProdjectContainer">
          <div className="adminProdjectShow">
            <div className="adminProdjectShowTop">
              <img src="https://i.pinimg.com/originals/af/1c/c3/af1cc3fa780eddc7c91a70f9e836b12c.jpg" alt="" className="adminProdjectShowImg"/>
              <div className="adminProdjectShowTopTitle">
                <span className="adminProdjectShowUsername">Prodject Title</span>
                <span className="adminProdjectShowUserTitle">Prodject sub Title</span>
              </div>
            </div>
            <div className="adminProdjectShowBottom">
              <span className="adminProdjectShowTitle"><i class="fa  fa-building-o admin__user-edit"></i> Prodject Description</span>
              <div className="adminProdjectShowInfo">

              <p className="adminProdjectShowInfoTitle" >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
              </div>

              <span className="adminProdjectShowTitle"><i class="fa  fa-check-circle-o admin__user-edit"></i> Prodject Status</span>
              <div className="adminProdjectShowInfo">

              <p className="adminProdjectShowInfoTitle" >Complete</p>
              </div>
              <span className="adminProdjectShowTitle"><i class="fa  fa-tags admin__user-edit"></i> Prodject References</span>
              <div className="adminProdjectShowInfo">

              <p className="adminProdjectShowInfoTitle" >help.com</p>
              </div>
              <span className="adminProdjectShowTitle"><i class="fa  fa-users admin__user-edit"></i> Prodject Contributors</span>
              <div className="adminProdjectShowInfo">

              <p className="adminProdjectShowInfoTitle" >Mohamad Siysinyuy</p>
              </div>




            </div>
          </div>
          <div className="adminProdjectUpdate">
            <span className="adminProdjectUpdateTitle">Edit</span>
            <form  className="adminProdjectUpdateForm">
              <div className="adminProdjectUpdateLeft">
                <div className="adminProdjectUpdateItem">
                    <label>Title</label>
                    <input type="text" placeholder="The Venus Prodject" className="adminProdjectUpdateInput"/>
                </div>

                <div className="adminProdjectUpdateItem">
                    <label>Sub Title</label>
                    <input type="text" placeholder="Save Mankind" className="adminProdjectUpdateInput"/>
                </div>

                <div className="adminProdjectUpdateItem">
                    <label>Description</label>
                    <input type="textarea" placeholder="This prodject is to save ...." className="adminProdjectUpdateInput"/>
                </div>
                <div className="adminProdjectUpdateItem">
                    <label>Prodject Status</label>
                    <input type="text" placeholder="Complete" className="adminProdjectUpdateInput"/>
                </div>
                <div className="adminProdjectUpdateItem">
                    <label>References</label>
                    <input type="text" placeholder="Help.com" className="adminProdjectUpdateInput"/>
                </div>

                <div className="adminProdjectUpdateItem">
                    <label>Contributors</label>
                    <input type="text" placeholder="Mohamad Siysinyuy" className="adminProdjectUpdateInput"/>
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

      </>
  )
}

export default AdminEditProdject
