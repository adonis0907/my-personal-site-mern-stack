import React,{useEffect,useState} from 'react'
import './header.css'
import PrimaryButton from '../buttons/PrimaryButton'


const Header = ({handlePopUp}) => {
  const [show, handleShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        handleShow(true)
        return () =>{
          window.removeEventListener("scroll");
        }
      }else handleShow(false)
      return () =>{
        window.removeEventListener("scroll");
      }
    })


  },[])
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


  return (
    <header className="header__container">
    <div className={`header ${show && "nav__black" }`}>
      <nav className="navigation" >
      <div className="navbar-left">
        <a href="#home" className="navbar__logo">Mrsuber</a>
      </div>

        <div className="navbar-right">
          <a href="#home">Home</a>
          <a href="#interview_prep">Interview Prep</a>
          <a href="#">Porfolio</a>
          <a href="#">Contact</a>
          <PrimaryButton onClick={handlePopUp} name={"Dashbourd"}/>

        </div>
      </nav>
    </div>

    </header>
  )
}

export default Header
