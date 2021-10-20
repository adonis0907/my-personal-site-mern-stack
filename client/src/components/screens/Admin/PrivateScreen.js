import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import img1 from '../../images/boxed-bg.jpg'
import AdminHeader from './components/adminHeader/AdminHeader'
import AdminSideBar from './components/adminSideBar/AdminSideBar'
import AdminHome from './components/adminHome/AdminHome'
import AdminFooter from './components/adminFooter/AdminFooter'
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
    <div className="wrapper" >

      <AdminHeader logoutHandler={logoutHandler} />

      <AdminSideBar />


      <div className="content-wrapper" style={{background: `url(${img1}) repeat fixed`}}>
      <AdminHome />

      </div>


      <AdminFooter />
    </div>
    {/*<div style={{background:"green", color:"white"}}>PrivateData:{privateData}</div>
    <button onClick={logoutHandler}>Logout</button>*/}

    </>

  )
}

export default PrivateScreen
