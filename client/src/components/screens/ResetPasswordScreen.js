import './ResetPasswordScreen.css'
import{useState} from 'react'
import Header3 from '../mainHeader/Header3'
import Content from '../mainContent/Content'
import axios from "axios"

const ResetPasswordScreen = ({match}) => {
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmpassword]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("");
  const [isScrolled,setIsScrolled]=useState(true)
  window.onscroll =()=>{
    setIsScrolled(window.pageYOffset===0?false:true)
    return ()=>(window.onscroll=null);
  }

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
    <>
      <Header3

      setPassword={setPassword}
      confirmpassword={confirmpassword}
      setConfirmpassword={setConfirmpassword}
      error={error}
      isScrolled={isScrolled}
      resetPasswordHandler={resetPasswordHandler}
      success={success}
      password={password}
      />
        <Content />
    </>
  )
}

export default ResetPasswordScreen
