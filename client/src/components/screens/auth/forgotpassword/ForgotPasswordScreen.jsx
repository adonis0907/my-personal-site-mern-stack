import './ForgotPasswordScreen.css'
import axios from 'axios'
import {useState} from "react"

const ForgotPasswordScreen = () => {
  const[email,setEmail]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("");

  const forgotPasswordHandler = async (e)=>{
    e.preventDefault()

    const config ={
      header:{
        "Content-Type":"application/json",
      },
    }
    try{
      const{data}=await axios.post("/api/auth/forgotpassword",{email}, config )
      setSuccess(data.data)
    }catch(error){
      setError(error.response.data.error);
      setEmail("")
      setTimeout(()=>{
        setError("")
      },5000)
    }
  }
  return (
    <div className="forgotpassword-screen">
    <div class="login-box">
      <form onSubmit={forgotPasswordHandler} >
        <h3 >Forgot Password</h3>
        {error &&<span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <div className="user-box">
          <p className="forgotpassword-screen_subtext">
          Please enter the email address you register your account with. We will send you reset password confirmation to this email
          </p>

          <input type="email" required="" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label >Email:</label>
        </div>
        <button type="submit" className="submit-btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Send Email</button>
      </form>
      </div>
    </div>
  )
}

export default ForgotPasswordScreen
