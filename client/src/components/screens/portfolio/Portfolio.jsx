import React from 'react'
import './Portfolio.css'
import BlogItem from '../../blogs/blogItem/BlogItem'
import PortfolioItem from './portfolioItem/PortfolioItem'
import {
  faUser,
  faCalendar
 } from '@fortawesome/free-solid-svg-icons';

import Header from '../../mainHeader/Header'
import {useState,useEffect} from 'react'
import axios from 'axios'
import img1 from '../../images/blogs/blog1.svg'
const Portfolio = ({history}) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const [isScrolled,setIsScrolled]=useState(true)
  window.onscroll =()=>{
    setIsScrolled(window.pageYOffset===0?false:true)
    return ()=>(window.onscroll=null);
  }


  useEffect(()=>{
    if(localStorage.getItem("authToken")){
      history.push("/")
    }
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




  window.onscroll=()=>{
    // let landing__cardForm=document.querySelector('.landing__shopping-card');
    // let landing__cardForm2=document.querySelector('.landing__login-from');
    // let landing__navbar=document.querySelector('.landing__navbar');
    // let landing__searchForm=document.querySelector('.landing__search-form');

    // if( landing__searchForm.classList[1]==='landing__active'){
    //   landing__searchForm.classList.remove('landing__active')
    // }
    // if( landing__navbar.classList[1]==='landing__active'){
    //   landing__navbar.classList.remove('landing__active')
    // }
    // if( landing__cardForm.classList[1]==='landing__active'){
    //   landing__cardForm.classList.remove('landing__active')
    // }
    // if( landing__cardForm2.classList[1]==='landing__active'){
    //   landing__cardForm2.classList.remove('landing__active')
    // }
  }
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

       <div className="main__blog1-box-container">
     <PortfolioItem
       img={img1}
       title={"fresh and organic vegitables and fruits"}
       text={"If you want them you can alway come and get them in buea behind the old market.i will give you fair price."}
       icon1={faUser}
       icon2={faCalendar}
      />
      <PortfolioItem
        img={img1}
        title={"fresh and organic vegitables and fruits"}
        text={"If you want them you can alway come and get them in buea behind the old market.i will give you fair price."}
        icon1={faUser}
        icon2={faCalendar}
       />
       <PortfolioItem
         img={img1}
         title={"fresh and organic vegitables and fruits"}
         text={"If you want them you can alway come and get them in buea behind the old market.i will give you fair price."}
         icon1={faUser}
         icon2={faCalendar}
        />
        <PortfolioItem
          img={img1}
          title={"fresh and organic vegitables and fruits"}
          text={"If you want them you can alway come and get them in buea behind the old market.i will give you fair price."}
          icon1={faUser}
          icon2={faCalendar}
         />
      </div>
      </section>

    </>
  )
}

export default Portfolio
