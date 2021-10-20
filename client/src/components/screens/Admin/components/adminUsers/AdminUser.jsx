import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import AdminHeader from '../adminHeader/AdminHeader'
import AdminSideBar from '../adminSideBar/AdminSideBar'
import AdminFooter from '../adminFooter/AdminFooter'
import img1 from '../../../../images/boxed-bg.jpg'
import './AdminUser.css'
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from "@material-ui/icons"
import {userRows} from "../../dummyData"
import {Link} from "react-router-dom"

const AdminUser = ({history}) => {
  const [error,setError] =useState("")
  const [privateData,setPrivateData]=useState("");
  const [data,setData]=useState(userRows)

  const handleDelete=(id)=>{
    setData(data.filter(item=>item.id!==id))
  }


  const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    renderCell:(params)=>{
      return(
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt=""/>
          {params.row.username}
        </div>
      )
    },
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',

    width: 120,
    editable: true,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,

  },
  {
    field:"action",
    headerName:"Action",
    width:150,
    renderCell:(params)=>{
      return(
        <>
        <Link to={"/user/"+params.row.id}>
        <button className="userListEdit">Edit</button>
        </Link>
        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
        </>
      )
    }



  }
];

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
    <div className="content-wrapper" style={{background: `url(${img1}) repeat fixed`}}>
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
    <AdminFooter />
    </div>

    </>
  )
}

export default AdminUser
