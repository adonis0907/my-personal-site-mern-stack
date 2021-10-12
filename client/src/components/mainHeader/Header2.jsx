import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faSearch,faUser,faDatabase} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
const Header2 = ({username,setUsername,confirmpassword,setConfirmpassword,email,password,setEmail,setPassword,error,isScrolled,registerHandler}) => {
  function landing__searchMenu(){
    // let landing__cardForm=document.querySelector('.landing__shopping-card');
    // let landing__cardForm2=document.querySelector('.landing__login-from');
    // let landing__navbar=document.querySelector('.landing__navbar');
    let landing__searchForm=document.querySelector('.landing__search-form');

      landing__searchForm.classList.toggle('landing__active')
      // landing__cardForm.classList.remove('landing__active')
      // landing__navbar.classList.remove('landing__active')
      // landing__cardForm2.classList.remove('landing__active')




  }

  // function landing__cardMenu(){
  //   let landing__cardForm=document.querySelector('.landing__shopping-card');
  //   let landing__cardForm2=document.querySelector('.landing__login-from');
  //   let landing__navbar=document.querySelector('.landing__navbar');
  //   let landing__searchForm=document.querySelector('.landing__search-form');
  //
  //     landing__cardForm.classList.toggle('landing__active')
      // landing__searchForm.classList.remove('landing__active')
      // landing__navbar.classList.remove('landing__active')
      // landing__cardForm2.classList.remove('landing__active')


  // }
  function landing__loginForm(){
    // let landing__cardForm=document.querySelector('.landing__shopping-card');
    let landing__cardForm2=document.querySelector('.landing__login-from');
    // let landing__navbar=document.querySelector('.landing__navbar');
    // let landing__searchForm=document.querySelector('.landing__search-form');
      landing__cardForm2.classList.toggle('landing__active')

      // landing__searchForm.classList.remove('landing__active')
      // landing__cardForm.classList.remove('landing__active')
      // landing__navbar.classList.remove('landing__active')


  }

  function landing__navwidow(){
    // let landing__cardForm=document.querySelector('.landing__shopping-card');
    // let landing__cardForm2=document.querySelector('.landing__login-from');
    let landing__navbar=document.querySelector('.landing__navbar');
    // let landing__searchForm=document.querySelector('.landing__search-form');

      landing__navbar.classList.toggle('landing__active')
      // landing__searchForm.classList.remove('landing__active')
      // landing__cardForm.classList.remove('landing__active')
      // landing__cardForm2.classList.remove('landing__active')

  }
  return (
    <header className={isScrolled?"landing__header scrolled" : "landing__header"}>
    <Link to="/" className="landing__logo link">MrSuber</Link>
    <nav className="landing__navbar">
      <a href="#landing__home">home</a>
      <a href="#landing__features">prodjects</a>
      <a href="#landing__products">resume</a>
      <a href="#landing__categories">site index</a>
      <a href="#landing__rewiew">contact</a>
      <Link to="/" >Dashbourd</Link>

    </nav>

    <div className="landing__icons">
      <div className="landing__fas landing__fa-bars" id="landing__menu-btn" onClick={landing__navwidow}><FontAwesomeIcon icon={ faBars }/></div>
      <div className="landing__fas landing__fa-search" id="landing__search-btn" onClick={landing__searchMenu}><FontAwesomeIcon icon={ faSearch }/></div>
      <div className="landing__fas landing__fa-shopping-card" id="landing__card-btn" onClick={landing__loginForm}><FontAwesomeIcon icon={ faDatabase }/></div>
      <div className="landing__fas landing__fa-user" id="landing__login-btn" onClick={landing__loginForm}><FontAwesomeIcon icon={ faUser }/></div>
    </div>

    <form className="landing__search-form">
      <input type="search" id="landing__search-box" className="landing__box" placeholder="Search here..." />
      <label htmlFor="landing__search-box" className="landing__fas landing__fa-search"><FontAwesomeIcon icon={ faSearch }/></label>
    </form>





    <form onSubmit={registerHandler} className="landing__login-from landing__active">
      <h3 >Create New account</h3>
      {error && <span className="error-message">{error}</span>}



      <input className="landing__box" type="text" required id="name" placeholder="Enter Username" value={username} onChange={(e) =>setUsername(e.target.value)}/>

        <input className="landing__box" type="email" required id="email" placeholder="Enter email" value={email} onChange={(e) =>setEmail(e.target.value)} tabIndex={1}/>



        <input className="landing__box" type="password" required id="password" placeholder="Enter Password" value={password} onChange={(e) =>setPassword(e.target.value)} tabIndex={2}/>
        <input className="landing__box" type="password" required id="confirmpassword" placeholder="Confirm Password" value={confirmpassword} onChange={(e) =>setConfirmpassword(e.target.value)}/>

        <p className="landing__form-paragraph">Already have an account?<Link to="/login">Login Now</Link></p>


      <button type="submit" className="landing__submit-btn" tabIndex={3}>Register</button>

    </form>



    </header>
  )
}

export default Header2
