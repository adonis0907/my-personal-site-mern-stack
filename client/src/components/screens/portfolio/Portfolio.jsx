import React from 'react'
import './Portfolio.css'
import PortfolioItem from './portfolioItem/PortfolioItem'

import Button from '../../buttons/Button'
import Header from '../../mainHeader/Header'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Footer from '../../footer/Footer'

import portfolios from '../../data/protfolios'
// import ChangeMode from '../../ChangeMode'
const Portfolio = ({history}) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const [isScrolled,setIsScrolled]=useState(true)
  const [privateData,setPrivateData]=useState("");





    const [menuItem, setMenuItems] = useState([])
    const [button, setButton] = useState([])





  window.onscroll =()=>{
    setIsScrolled(window.pageYOffset===0?false:true)
    return ()=>(window.onscroll=null);
  }


  useEffect(()=>{
    if(localStorage.getItem("authToken")){
      history.push("/")
    }


    const fetchPrivateData = async () =>{
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try{


        setPrivateData(portfolios)
        setMenuItems(portfolios)
        const allButtons =['All',...new Set(portfolios.map(item=>item.category))]
        setButton(allButtons)
        const {data} = await axios.get("/api/private/getallprodject",config)

      }catch(error){

        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }

    fetchPrivateData()
  },[history])



  const loginHandler= async (e)=>{
    e.preventDefault()
    const config = {
      header:{
        "Content-Type":"application/json"
      }
    }


    try{
       const {data}= await axios.post("/api/auth/login",{email,password},config);
       localStorage.setItem("authToken",data.token)
       history.push("/")
    }catch(error){
      setError(error.response.data.error)
        setTimeout(()=>{
          setError("")
        },5000)
    }
  }




  if(privateData.length===0){
    return("loading ...")
  }

  const filter =(button)=>{
    if(button==='All'){
      setMenuItems(privateData)
      return
    }
    const filteredData = privateData.filter(item => item.category===button);
    setMenuItems(filteredData)
  }

  console.log("this is private data",menuItem)
  return (

    <>
    <Header
    setEmail={setEmail}
    setPassword={setPassword}
    error={error}
    isScrolled={isScrolled}
    loginHandler={loginHandler}
    email={email}
    password={password}
     />
     <section className="main__blogs1" id="main__blogs1">
       <h1 className="landing__heading">current<span>prodjects</span></h1>
       <Button filter={filter} button={button} />

     <PortfolioItem
       data={menuItem}
      />

      </section>

      <Footer />

    </>
  )
}

export default Portfolio
