import './LoginScreen.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import dashbourd from './dashboard.png'
import SecondaryButton from '../buttons/SecondaryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import EcomShoppingCard from '../cards/ecomshoppingcard/EcomShoppingCard'
// import PrimaryButton from "../buttons/PrimaryButton"
import {
  faShoppingBasket,
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
  faTrash,
  faDatabase


 } from '@fortawesome/free-solid-svg-icons';



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



  function ecom__searchMenu(){
    let ecom__cardForm=document.querySelector('.ecom__shopping-card');
    let ecom__cardForm2=document.querySelector('.ecom__login-from');
    let ecom__navbar=document.querySelector('.ecom__navbar');
    let ecom__searchForm=document.querySelector('.ecom__search-form');

      ecom__searchForm.classList.toggle('ecom__active')
      // ecom__cardForm.classList.remove('ecom__active')
      // ecom__navbar.classList.remove('ecom__active')
      // ecom__cardForm2.classList.remove('ecom__active')




  }

  function ecom__cardMenu(){
    let ecom__cardForm=document.querySelector('.ecom__shopping-card');
    let ecom__cardForm2=document.querySelector('.ecom__login-from');
    let ecom__navbar=document.querySelector('.ecom__navbar');
    let ecom__searchForm=document.querySelector('.ecom__search-form');

      ecom__cardForm.classList.toggle('ecom__active')
      // ecom__searchForm.classList.remove('ecom__active')
      // ecom__navbar.classList.remove('ecom__active')
      // ecom__cardForm2.classList.remove('ecom__active')


  }
  function ecom__loginForm(){
    let ecom__cardForm=document.querySelector('.ecom__shopping-card');
    let ecom__cardForm2=document.querySelector('.ecom__login-from');
    let ecom__navbar=document.querySelector('.ecom__navbar');
    let ecom__searchForm=document.querySelector('.ecom__search-form');
      ecom__cardForm2.classList.toggle('ecom__active')

      // ecom__searchForm.classList.remove('ecom__active')
      // ecom__cardForm.classList.remove('ecom__active')
      // ecom__navbar.classList.remove('ecom__active')


  }

  function ecom__navwidow(){
    let ecom__cardForm=document.querySelector('.ecom__shopping-card');
    let ecom__cardForm2=document.querySelector('.ecom__login-from');
    let ecom__navbar=document.querySelector('.ecom__navbar');
    let ecom__searchForm=document.querySelector('.ecom__search-form');

      ecom__navbar.classList.toggle('ecom__active')
      // ecom__searchForm.classList.remove('ecom__active')
      // ecom__cardForm.classList.remove('ecom__active')
      // ecom__cardForm2.classList.remove('ecom__active')

  }
  window.onscroll=()=>{
    let ecom__cardForm=document.querySelector('.ecom__shopping-card');
    let ecom__cardForm2=document.querySelector('.ecom__login-from');
    let ecom__navbar=document.querySelector('.ecom__navbar');
    let ecom__searchForm=document.querySelector('.ecom__search-form');

    // if( ecom__searchForm.classList[1]==='ecom__active'){
    //   ecom__searchForm.classList.remove('ecom__active')
    // }
    // if( ecom__navbar.classList[1]==='ecom__active'){
    //   ecom__navbar.classList.remove('ecom__active')
    // }
    // if( ecom__cardForm.classList[1]==='ecom__active'){
    //   ecom__cardForm.classList.remove('ecom__active')
    // }
    // if( ecom__cardForm2.classList[1]==='ecom__active'){
    //   ecom__cardForm2.classList.remove('ecom__active')
    // }
  }
  return (
    <>
    <header className={isScrolled?"ecom__header scrolled" : "ecom__header"}>
    <a href="#" className="ecom__logo link"><FontAwesomeIcon icon={ faShoppingBasket }/>MrSuber</a>
    <nav className="ecom__navbar">
      <a href="#ecom__home">home</a>
      <a href="#ecom__features">features</a>
      <a href="#ecom__products">products</a>
      <a href="#ecom__categories">categories</a>
      <a href="#ecom__rewiew">rewiew</a>
      <a href="#ecom__blogs">blogs</a>

    </nav>

    <div className="ecom__icons">
      <div className="ecom__fas ecom__fa-bars" id="ecom__menu-btn" onClick={ecom__navwidow}><FontAwesomeIcon icon={ faBars }/></div>
      <div className="ecom__fas ecom__fa-search" id="ecom__search-btn" onClick={ecom__searchMenu}><FontAwesomeIcon icon={ faSearch }/></div>
      <div className="ecom__fas ecom__fa-shopping-card" id="ecom__card-btn" onClick={ecom__loginForm}><FontAwesomeIcon icon={ faDatabase }/></div>
      <div className="ecom__fas ecom__fa-user" id="ecom__login-btn" onClick={ecom__loginForm}><FontAwesomeIcon icon={ faUser }/></div>
    </div>

    <form className="ecom__search-form">
      <input type="search" id="ecom__search-box" className="ecom__box" placeholder="Search here..." />
      <label htmlFor="ecom__search-box" className="ecom__fas ecom__fa-search"><FontAwesomeIcon icon={ faSearch }/></label>
    </form>





    <form onSubmit={loginHandler} className="ecom__login-from ecom__active">
      <h3 >Login Now</h3>
      {error && <span className="error-message">{error}</span>}




        <input className="ecom__box" type="email" required id="email" placeholder="Enter email" value={email} onChange={(e) =>setEmail(e.target.value)} tabIndex={1}/>



        <input className="ecom__box" type="password" required id="password" placeholder="Enter Password" value={password} onChange={(e) =>setPassword(e.target.value)} tabIndex={2}/>
        <p className="ecom__form-paragraph">forgot your password?<Link to="/forgotpassword">Reset Now</Link></p>
        <p className="ecom__form-paragraph">Don't have an account?<Link to="/register">Create Now</Link></p>


      <button type="submit" className="ecom__submit-btn" tabIndex={3}>Login</button>

    </form>



    </header>
    <main>
        <section>
        <div className="home-cover" id="home">
          {/*this is where the gradient starts*/}
                <div className="block">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
          {/*this is where the gradient ends*/}
          <div className="content-container">
          {/*this is where the text container starts*/}
                <div className="left-content">
                    <div className="text">
                    <h1> My portfolio web version 2.0</h1>
                    <p>
                    A MERN aplication with an amazing dashboard and a tutorial section to help perpare for job coding chanlange.
                    </p>
                      <div className="button-area">
                        <a href="#"> Contact </a>

                        <SecondaryButton  name={"Dashbourd"}/>

                      </div>
                    </div>
                </div>
          {/*this is where the text container ends*/}

          {/*image container showing dashboard starts*/}
                <div className="right-content">
                    <div className="img-wrapper-tablet">
                      <img src={dashbourd} alt="" />
                    </div>
                </div>
          {/*image container showing dashboard ends*/}
          </div>
        </div>
        </section>
    </main>
    </>
  )
}

export default LoginScreen
