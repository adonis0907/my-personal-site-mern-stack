import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import AdminHeader from '../adminHeader/AdminHeader'
import AdminSideBar from '../adminSideBar/AdminSideBar'
import AdminFooter from '../adminFooter/AdminFooter'
import img from '../../../../images/boxed-bg.jpg'
import img1 from '../../../../images/me.webp'
import './AdminUser.css'
import {userRows} from "../../dummyData"
import {Link} from "react-router-dom"

const AdminUser = ({history}) => {
  const [error,setError] =useState("")
  const [privateData,setPrivateData]=useState("");
  const [data,setData]=useState(userRows)





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
    <div className="admin__details">
      <div className="admin__recentOrder">
        <div className="admin__cardHeader">
          <h2>Users Table</h2>
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..."/>
              <span className="input-group-btn">
                <button type='submit' name='search' id='search-btn' className="btn btn-flat"><i className="fa fa-search"></i></button>
              </span>
            </div>
          </form>
          <div>

          <Link to="/adminNewUser" className="admin__btn">New User</Link>
          </div>

        </div>
        <table>
          <thead>
            <tr>
              <td>Avatar</td>
              <td>Name</td>
              <td>Country</td>
              <td>Account</td>
              <td>Status</td>
              <td>Contorls</td>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
              <td>Star Refrigerator</td>
              <td>Spain</td>
              <td>Verified</td>
              <td><span className="admin__status admin__delivered">Admin</span></td>
              <td><div class="tools"><Link to="/adminEditUser" className="adminlink"><i class="fa fa-edit admin__user-edit"></i></Link><i class="fa fa-trash-o admin__user-delete"></i></div></td>
            </tr>
            <tr>
            <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
              <td>Window Coolers</td>
              <td>Cameroon</td>
              <td>Pending</td>
              <td><span className="admin__status admin__pending">pending</span></td>
              <td><div class="tools"><Link to="/adminEditUser" className="adminlink"><i class="fa fa-edit admin__user-edit"></i></Link><i class="fa fa-trash-o admin__user-delete"></i></div></td>

            </tr>
            <tr>
            <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
              <td>Speakers</td>
              <td>Nigeria</td>
              <td>Pending</td>
              <td><span className="admin__status admin__return">Super Admin</span></td>
              <td><div class="tools"><Link to="/adminEditUser" className="adminlink"><i class="fa fa-edit admin__user-edit"></i></Link><i class="fa fa-trash-o admin__user-delete"></i></div></td>

            </tr>
            <tr>
            <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
              <td>Hp Laptop</td>
              <td>Chad</td>
              <td>Pending</td>
              <td><span className="admin__status admin__inporgress">Normal User</span></td>
              <td><div class="tools"><Link to="/adminEditUser" className="adminlink"><i class="fa fa-edit admin__user-edit"></i></Link><i class="fa fa-trash-o admin__user-delete"></i></div></td>

            </tr>

            <tr>
            <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
              <td>Star Refrigerator</td>
              <td>Nigeria</td>
              <td>Pending</td>
              <td><span className="admin__status admin__delivered">Admin</span></td>
              <td><div class="tools"><Link to="/adminEditUser" className="adminlink"><i class="fa fa-edit admin__user-edit"></i></Link><i class="fa fa-trash-o admin__user-delete"></i></div></td>

            </tr>
            <tr>
            <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
              <td>Window Coolers</td>
              <td>$120</td>
              <td>Verified</td>
              <td><span className="admin__status admin__pending">pending</span></td>
              <td><div class="tools"><Link to="/adminEditUser" className="adminlink"><i class="fa fa-edit admin__user-edit"></i></Link><i class="fa fa-trash-o admin__user-delete"></i></div></td>

            </tr>
            <tr>
            <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
              <td>Speakers</td>
              <td>$600</td>
              <td>Verified</td>
              <td><span className="admin__status admin__return">Super Admin</span></td>
              <td><div class="tools"><Link to="/adminEditUser" className="adminlink"><i class="fa fa-edit admin__user-edit"></i></Link><i class="fa fa-trash-o admin__user-delete"></i></div></td>

            </tr>
            <tr>
            <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
              <td>Hp Laptop</td>
              <td>$6000</td>
              <td>Verified</td>
              <td><span className="admin__status admin__inporgress">Normal User</span></td>
              <td><div class="tools"><Link to="/adminEditUser" className="adminlink"><i class="fa fa-edit admin__user-edit"></i></Link><i class="fa fa-trash-o admin__user-delete"></i></div></td>

            </tr>
          </tbody>
        </table>
      </div>




    </div>
    </div>
    <AdminFooter />
    </div>

    </>
  )
}

export default AdminUser
