import './RegisterScreen.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Header2 from '../mainHeader/Header2'
import Content from '../mainContent/Content'

const RegisterScreen = ({history}) => {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmpassword,setConfirmpassword]=useState('')
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

  const registerHandler= async (e)=>{
    e.preventDefault()
    const config = {
      header:{
        "Content-Type":"application/json"
      }
    }
    if(password!==confirmpassword){
      setPassword("")
      setConfirmpassword("")
      setTimeout(()=>{
        setError("")
      },5000)
      return setError("Password do not match")
    }

    try{
       const {data}= await axios.post("/api/auth/register",{username,email,password},config);
       localStorage.setItem("authToken",data.token)
       history.push("/")
    }catch(error){
      setError(error.response.data.error)
        setTimeout(()=>{
          setError("")
        },5000)
    }
  }
  return (
  <>
    <Header2
    username={username}
    setUsername={setUsername}
    setEmail={setEmail}
    setPassword={setPassword}
    confirmpassword={confirmpassword}
    setConfirmpassword={setConfirmpassword}
    error={error}
    isScrolled={isScrolled}
    registerHandler={registerHandler}
    email={email}
    password={password}
    />
      <Content />
  </>
  )
}

export default RegisterScreen
