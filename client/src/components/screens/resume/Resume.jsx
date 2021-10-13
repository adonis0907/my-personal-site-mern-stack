import './Resume.css'


import {useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../../mainHeader/Header'
import img1 from '../../images/me.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope,faGlobe,faMapMarker,faFilm,faCookie,faPaintBrush,faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';

import {LinkedIn} from '@material-ui/icons'
import Footer from '../../footer/Footer'

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
    <>
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
              <h5>2010 - 2011</h5>
              <h4>GENERAL CERTIFICATE OF EDUCATION (GCE)<br/><span>Ordinary Level(4-points | 4 papers)</span></h4>
              <h4>Government Bilingual High School (GBHS) kumbo</h4>
            </li>

            <li>
              <h5>2011 - 2012</h5>
              <h4>GENERAL CERTIFICATE OF EDUCATION (GCE)<br/><span>Ordinary Level(17-points | 10 papers)</span></h4>
              <h4>Government Bilingual High School (GBHS) kumbo</h4>
            </li>

            <li>
              <h5>2013 - 2014</h5>
              <h4>GENERAL CERTIFICATE OF EDUCATION (GCE)<br/><span>Advance Level(15-points | 5 papers)</span></h4>
              <h4>Government Bilingual High School (GBHS) kumbo</h4>
            </li>

            <li>
              <h5>2016 - 2020</h5>
              <h4>Bachelor of Science in Computer Engineering(BSCE)<br/><span>Incomplete</span></h4>
              <h4>University Of Buea</h4>
            </li>

            <li>
              <h5>2020 - present</h5>
              <h4>Full-Stack Engineer<span>HTML,CSS,JavaScript,React,Nodejs path</span></h4>
              <h4>THE ODIN PROJECT</h4>
            </li>
          </ul>
        </div>

        <div className="resume__contactInfo resume__language">
          <h3 className="resume__title">Languages</h3>
          <ul>
            <li>
                <span className="resume__text">English</span>
                <span className="resume__percent">
                  <div className="resume__percent-score"></div>
                </span>
            </li>
            <li>
                <span className="resume__text">Others</span>
                <span className="resume__percent">
                  <div className="resume__percent-score1"></div>
                </span>
            </li>
            </ul>
            </div>
      </div>
      <div className="resume__right-side">
        <div className="resume__about">
        <h2 className="resume__right-title">Profile</h2>
            <p className="resume__right-par">I was introduce to software development in my very first year in the university studying computer engineering which gave me a direct line to Web Development.<br/><br/> Due to personal research and following full-stack online curriculum, i learn about HTML and its evolution to HTML5, used tools like WAVE and W3C for accessibility, CSS3 ,Bootstrap, SASS, SCSS,for styling design and animations, then JavaScript, JQuery for logic and fetching data from REST APIs.<br/><br/> After a couple of projects with these languages for Front-End and UI Designs, i was introduce to frame works like React and Angular for building single web applications and proper use of props and components certainly made life easier. My new life into frame works lead me to being familiar npm for installing dependencies  and tools such as WebPack which came loaded with tools necessary for minifying my code for accessibility, Babel for translating ES6 JavaScript code to ES5 JavaScript code for browser comparability.<br/><br/> To complete my full stack journey as a full stack developer, i was introduce to back-end technologies such as Nodjs, Python frame work like  Flask, Django and NoSQL database like MongoDB, SQL database like MYSQL, and Docker technologies.<br/><br/> To showcase my projects to the world, I had to host them with FireBase, Heroku, Github.</p>
        </div>

        <div className="resume__about">
        <h2 className="resume__right-title">Experience</h2>
          <div className="resume__right-box">
            <div className="resume__year-company">
              <h5>2019 - 2020</h5>
              <h5>Wazahub</h5>
              <h5>Cameroon | Buea | Moliko</h5>

            </div>
            <div className="resume__text">
              <h4>Python BackEnd Developer</h4>
              <p>Developement of transaction service Rest API with python frame work (Flask) implementing the Micro-service architecture, deployment on AWS using Docker technologies and MYSQL Database Management and over 200 different email templates using Html and Css. It was an intresting team of engineers</p>
            </div>
          </div>

          <div className="resume__right-box">
            <div className="resume__year-company">
              <h5>2021-present</h5>
              <h5>Personal Projects</h5>
              <h5>Cameroon | Buea | Moliko</h5>

            </div>
            <div className="resume__text">
              <h4>Full Stack</h4>
              <p>Developement of transaction service Rest API with Nodejs implementing the Micro-service architecture, deployment on heroku,FireBase,GitHub  and NoSQL Database Management MongoDB and over 20+ different prodjects with Html, css,JavaScript,React and more</p>
            </div>
          </div>
        </div>

        <div className="resume__about resume__skills">
        <h2 className="resume__right-title">Professional Skills</h2>
        <div className="resume__right-box">
          <h4>Html</h4>
          <div className="resume__righ-percent"><div className="resume__percent-score"></div></div>
        </div>

        <div className="resume__right-box">
          <h4>CSS</h4>
          <div className="resume__righ-percent"><div className="resume__percent-score"></div></div>
        </div>

        <div className="resume__right-box">
          <h4>JavaScript</h4>
          <div className="resume__righ-percent"><div className="resume__percent-score"></div></div>
        </div>

        <div className="resume__right-box">
          <h4>React</h4>
          <div className="resume__righ-percent"><div className="resume__percent-score"></div></div>
        </div>

        <div className="resume__right-box">
          <h4>Nodejs</h4>
          <div className="resume__righ-percent"><div className="resume__percent-score"></div></div>
        </div>

        <div className="resume__right-box">
          <h4>Docker</h4>
          <div className="resume__righ-percent"><div className="resume__percent-score"></div></div>
        </div>

        </div>
        <div className="resume__about resume__interest">
          <h2 className="resume__right-title">Interest</h2>
          <ul>
            <li><FontAwesomeIcon icon={faFilm}/> Movies</li>
            <li><FontAwesomeIcon icon={faCookie}/> Cooking</li>
            <li><FontAwesomeIcon icon={faPaintBrush}/> Embroidery</li>
            <li><FontAwesomeIcon icon={faMapMarkedAlt}/> Tourism</li>

          </ul>
        </div>
      </div>

     </div>



    </div>
    <Footer />
    </>
  )
}

export default Resume
