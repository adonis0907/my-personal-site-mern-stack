import './LoginScreen.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../mainHeader/Header'
import Content from '../mainContent/Content'


const LoginScreen = ({history}) => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const [isScrolled,setIsScrolled]=useState(true)
  window.onscroll =()=>{
    setIsScrolled(window.pageYOffset===0?false:true)
    return ()=>(window.onscroll=null);
  }
  console.log(window.pageYOffset)

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
    let landing__cardForm=document.querySelector('.landing__shopping-card');
    let landing__cardForm2=document.querySelector('.landing__login-from');
    let landing__navbar=document.querySelector('.landing__navbar');
    let landing__searchForm=document.querySelector('.landing__search-form');

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
    <Content />
    </>
  )
}

export default LoginScreen
