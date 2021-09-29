import './login2.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Login2 = ({history,handlePopUp2,closeform}) => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')

  useEffect(()=>{
    if(localStorage.getItem("authToken")){
      history.push("/admin")
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
       history.push("/admin")
    }catch(error){
      setError(error.response.data.error)
        setTimeout(()=>{
          setError("")
        },5000)
    }
  }



  return (
    <>
    <div className="align " id="login2">

        <div class="login-box">
        <h3 className="close-box" onClick={closeform}>×</h3>
          <h2>Login</h2>
          {error && <span className="error-message">{error}</span>}

          <form onSubmit={loginHandler} >
            <div class="user-box">
                <input type="text" name="" required=""  value={email} onChange={(e) =>setEmail(e.target.value)} tabIndex={1}/>
                <label>Email</label>
            </div>
            <div class="user-box">
              <input type="password" name="" required="" value={password} onChange={(e) =>setPassword(e.target.value)} tabIndex={2} />
              <label>Password</label>
            </div>
            <button type="submit" className="submit-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
            <span className="login-subtext">Don't have an account? <b className="register-link" onClick={handlePopUp2}>Register</b></span>
        </form>
      </div>
  </div>


    </>
  )
}

export default Login2
