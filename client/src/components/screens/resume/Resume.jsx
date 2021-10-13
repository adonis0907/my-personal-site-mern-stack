import './Resume.css'


import {useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../../mainHeader/Header'
import img1 from '../../images/me.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope,faGlobe,faMapMarker} from '@fortawesome/free-solid-svg-icons';
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import {YoutubeIcon,LinkedIn} from '@material-ui/icons'


const Resume = ({history}) => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
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
    <div className="resume">
    <Header
    setEmail={setEmail}
    setPassword={setPassword}
    error={error}
    isScrolled={isScrolled}
    loginHandler={loginHandler}
    email={email}
    password={password}
     />
     <div className="resume__container">

      <div className="resume__left-side">
        <div className="resume__profileText">
          <div className="resume__img-box">
            <img src={img1} alt="Mohamad image"/>
          </div>
          <h2>Mohamad Siysinyuy Banbong<br/><span>Software Engineer</span></h2>
        </div>
        <div className="resume__contactInfo">
          <h3 className="resume__title">Contact Info</h3>
          <ul>
            <li>
              <span className="resume__icon"><FontAwesomeIcon icon={faPhone}/></span>
              <span className="resume__text">+237 653 255 547 | +237 651 841 003</span>
            </li>

            <li>
              <span className="resume__icon"><FontAwesomeIcon icon={faEnvelope}/></span>
              <span className="resume__text">msiysinyuy@gmail.com</span>
            </li>

            <li>
              <span className="resume__icon"><FontAwesomeIcon icon={faGlobe}/></span>
              <span className="resume__text">my-personal-site-mern-stack.herokuapp.com</span>
            </li>

            <li>
              <span className="resume__icon"><LinkedIn/></span>
              <span className="resume__text">linkedin.com/in/mohamad-siysinyuy-26154215b/</span>
            </li>

            <li>
              <span className="resume__icon"><FontAwesomeIcon icon={faMapMarker}/></span>
              <span className="resume__text">Moliko | Buea | Cameroon</span>
            </li>
          </ul>
        </div>


        <div className="resume__contactInfo resume__education">
          <h3 className="resume__title">Education</h3>
          <ul>
            <li>
              <span className="resume__icon"><FontAwesomeIcon icon={faPhone}/></span>
              <span className="resume__text">+237 653 255 547 | +237 651 841 003</span>
            </li>

            <li>
              <span className="resume__icon"><FontAwesomeIcon icon={faEnvelope}/></span>
              <span className="resume__text">msiysinyuy@gmail.com</span>
            </li>

            <li>
              <span className="resume__icon"><FontAwesomeIcon icon={faGlobe}/></span>
              <span className="resume__text">my-personal-site-mern-stack.herokuapp.com</span>
            </li>

            <li>
              <span className="resume__icon"><LinkedIn/></span>
              <span className="resume__text">linkedin.com/in/mohamad-siysinyuy-26154215b/</span>
            </li>

            <li>
              <span className="resume__icon"><FontAwesomeIcon icon={faMapMarker}/></span>
              <span className="resume__text">Moliko | Buea | Cameroon</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="resume__right-side"></div>
     </div>

    </div>
  )
}

export default Resume
