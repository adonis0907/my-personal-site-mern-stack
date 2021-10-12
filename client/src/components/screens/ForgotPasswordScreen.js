import './ForgotPasswordScreen.css'
import axios from 'axios'
import {useState} from "react"
import Header4 from '../mainHeader/Header4'
import Content from '../mainContent/Content'

const ForgotPasswordScreen = () => {
  const[email,setEmail]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("");
  const [isScrolled,setIsScrolled]=useState(true)
  window.onscroll =()=>{
    setIsScrolled(window.pageYOffset===0?false:true)
    return ()=>(window.onscroll=null);
  }

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
    <>
      <Header4

      email={email}
      setEmail={setEmail}
      error={error}
      isScrolled={isScrolled}
      forgotPasswordHandler={forgotPasswordHandler}
      success={success}

      />
        <Content />
    </>
  )
}

export default ForgotPasswordScreen
