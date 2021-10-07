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
      <form onSubmit={forgotPasswordHandler} className="forgotpassword-screen_form">
        <h3 className="forgotpassword-screen_title">Forgot Password</h3>
        {error &&<span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <div className="form-group">
          <p className="forgotpassword-screen_subtext">
          Please enter the email address you register your account with. We will send you reset password confirmation to this email
          </p>
          <label htmlFor="email">Email:</label>
          <input type="email" required id="email" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Send Email</button>
      </form>
    </div>
  )
}

export default ForgotPasswordScreen
