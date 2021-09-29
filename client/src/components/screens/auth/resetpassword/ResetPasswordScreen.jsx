import './ResetPasswordScreen.css'
import{useState} from 'react'
import{Link} from "react-router-dom"
import axios from "axios"

const ResetPasswordScreen = ({match}) => {
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmpassword]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("");

  const resetPasswordHandler = async (e)=>{
  e.preventDefault()

  const config ={
    header:{
      "Content-Type":"application/json",
    },
  }

  if(password!==confirmpassword){
    setPassword("")
    setConfirmpassword("")
    setTimeout(()=>{
      setError("")
    },5000)
    return setError("Passwords don't match")
  }
  try{
    const {data} = await axios.put(`/api/auth/resetpassword/${match.params.resetToken}`,{password,},config)

    setSuccess(data.data)
  }catch(error){
    setError(error.response.data.error)
    setTimeout(()=>{
      setError("")
    },5000)
  }

  }

  return (
    <div className="resetpassword-container">
    <div className="login-box">
      <form onSubmit={resetPasswordHandler} >
        <h3 className="resetpassword-screen_title">Reset Password</h3>
        {error &&<span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}<Link to="/login">Login</Link></span>}
        <div className="user-box">

          <input type="password" required="" id="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <label>New Password</label>
        </div>

        <div className="user-box">

          <input type="password" required="" id="confirmpassword" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/>
          <label >Confirm New Password</label>
        </div>

        <button type="submit" className="submit-btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Reset Password
        </button>
      </form>
    </div>
    </div>
  )
}

export default ResetPasswordScreen
