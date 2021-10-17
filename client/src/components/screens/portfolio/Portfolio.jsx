import React from 'react'
import './Portfolio.css'
import BlogItem from '../../blogs/blogItem/BlogItem'
import PortfolioItem from './portfolioItem/PortfolioItem'

import Button from '../../buttons/Button'
import Header from '../../mainHeader/Header'
import {useState,useEffect} from 'react'
import axios from 'axios'
import img1 from '../../images/blogs/blog1.svg'
import Footer from '../../footer/Footer'

import portfolios from '../../data/protfolios'
// import ChangeMode from '../../ChangeMode'
const Portfolio = ({history}) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const [isScrolled,setIsScrolled]=useState(true)

  const allButtons =['All',...new Set(portfolios.map(item=>item.category))]

  // const allButtons =['All',...portfolios.map(item=>item.category)]

    const [menuItem, setMenuItems] = useState(portfolios)
    const [button, setButton] = useState(allButtons)

    const filter =(button)=>{
      if(button==='All'){
        setMenuItems(portfolios)
        return
      }
      const filteredData = portfolios.filter(item => item.category===button);
      setMenuItems(filteredData)
    }
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
