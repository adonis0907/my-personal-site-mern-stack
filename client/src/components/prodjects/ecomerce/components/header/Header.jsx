import React from 'react'
import './Header.css'
import card from "../../images/cart-img-1.png"
import card2 from "../../images/cart-img-2.png"
import card3 from "../../images/cart-img-3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EcomShoppingCard from '../cards/ecomshoppingcard/EcomShoppingCard'
import PrimaryButton from "../buttons/PrimaryButton"
import {
  faShoppingBasket,
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
  faTrash


 } from '@fortawesome/free-solid-svg-icons';




const Header = () => {
  let ecom__cardForm=document.querySelector('.ecom__shopping-card');
  let ecom__cardForm2=document.querySelector('.ecom__login-from');
  let ecom__navbar=document.querySelector('.ecom__navbar');
  let ecom__searchForm=document.querySelector('.ecom__search-form');

  function ecom__searchMenu(){

      ecom__searchForm.classList.toggle('ecom__active')
      ecom__cardForm.classList.remove('ecom__active')
      ecom__navbar.classList.remove('ecom__active')
      ecom__cardForm2.classList.remove('ecom__active')

  }

  function ecom__cardMenu(){

      ecom__cardForm.classList.toggle('ecom__active')
      ecom__searchForm.classList.remove('ecom__active')
      ecom__navbar.classList.remove('ecom__active')
      ecom__cardForm2.classList.remove('ecom__active')

  }
  function ecom__loginForm(){

      ecom__cardForm2.classList.toggle('ecom__active')
      ecom__searchForm.classList.remove('ecom__active')
      ecom__cardForm.classList.remove('ecom__active')
      ecom__navbar.classList.remove('ecom__active')


  }

  function ecom__navwidow(){


      ecom__navbar.classList.toggle('ecom__active')
      ecom__searchForm.classList.remove('ecom__active')
      ecom__cardForm.classList.remove('ecom__active')
      ecom__cardForm2.classList.remove('ecom__active')

  }
  window.onscroll=()=>{
    ecom__searchForm.classList.remove('ecom__active')
    ecom__cardForm.classList.remove('ecom__active')
    ecom__navbar.classList.remove('ecom__active')
    ecom__cardForm2.classList.remove('ecom__active')
  }

  return (
    <header className="ecom__header">
    <a href="#" className="ecom__logo link"><FontAwesomeIcon icon={ faShoppingBasket }/>Groco</a>
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
      <div className="ecom__fas ecom__fa-shopping-card" id="ecom__card-btn" onClick={ecom__cardMenu}><FontAwesomeIcon icon={ faShoppingCart }/></div>
      <div className="ecom__fas ecom__fa-user" id="ecom__login-btn" onClick={ecom__loginForm}><FontAwesomeIcon icon={ faUser }/></div>
    </div>

    <form className="ecom__search-form">
      <input type="search" id="ecom__search-box" className="ecom__box" placeholder="Search here..." />
      <label htmlFor="ecom__search-box" className="ecom__fas ecom__fa-search"><FontAwesomeIcon icon={ faSearch }/></label>
    </form>


    <div className="ecom__shopping-card">
    <EcomShoppingCard icon={faTrash} img={card} alt={"water mellon image"}  title={"watermelon"}  price={4.99} qty={1}  />
    <EcomShoppingCard icon={faTrash} img={card2} alt={"Onion"}  title={"Onion"}  price={4.99} qty={1}  />
    <EcomShoppingCard icon={faTrash} img={card3} alt={"Chicken"}  title={"Chicken"}  price={4.99} qty={1}  />
    <div className="ecom__total">total : $19.69/- </div>
    <PrimaryButton name={"Checkout"} />
    </div>

    <form className="ecom__login-from">
      <h3>Login now</h3>
      <input type="email" placeholder="your email" className="ecom__box" />
      <input type="password" placeholder="your password" className="ecom__box" />
        <p className="ecom__form-paragraph">forgot your password?<a href="#">Reset Now</a></p>
        <p className="ecom__form-paragraph">Don't have an account?<a href="#">Create Now</a></p>

      <input type="submit" value="login now" className="ecom__submit-btn"/>

    </form>

    </header>
  )
}

export default Header
