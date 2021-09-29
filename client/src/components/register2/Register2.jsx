import './register2.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Register2 = ({history,handlePopUp2,closeform}) => {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmpassword,setConfirmpassword]=useState('')
  const [error,setError]=useState('')

  useEffect(()=>{
    if(localStorage.getItem("authToken")){
      history.push("/private")
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

      <div className="align">
          <div class="login-box">
          <h3 className="close-box" onClick={closeform}>×</h3>
            <h2>Register</h2>
            {error && <span className="error-message">{error}</span>}
            <form onSubmit={registerHandler} >
              <div class="user-box">
                  <input type="text" name="name" id="name"required="" value={username} onChange={(e) =>setUsername(e.target.value)}/>
                  <label htmlFor="name">Username</label>
              </div>
              <div class="user-box">
                  <input type="email" name="email" id="email" required=""  value={email} onChange={(e) =>setEmail(e.target.value)}/>
                  <label htmlFor="email">Email</label>
              </div>
              <div class="user-box">
                <input type="password" name="password" id="password" required="" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                <label htmlFor="password">Password</label>
              </div>
              <div class="user-box">
                <input type="password" name="password" id="confirmpassword" required="" value={confirmpassword} onChange={(e) =>setConfirmpassword(e.target.value)}/>
                <label htmlFor="confirmpassword">Confirm Password</label>
              </div>
              <button type="submit" className="submit-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </button>
              <span className="login-subtext">Already have an account? <b className="register-link" onClick={handlePopUp2}>Login</b></span>
          </form>
        </div>
    </div>
  )
}

export default Register2
