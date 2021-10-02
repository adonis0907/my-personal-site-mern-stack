import React from 'react'
import './LandingPage.css'
import Header from '../../header/Header'
import dashbourd from './dashboard.png'
import SecondaryButton from '../../buttons/SecondaryButton'
import Layout from '../../layout/Layout'
import Login2 from '../../login2/Login2'
import Register2 from '../../register2/Register2'

const LandingPage = ({history}) => {

  function handlePopUp(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active1')
    var popup = document.getElementById('popup')
    popup.classList.toggle('active2')

  }

  function handlePopUp2(){

    var popup2 = document.getElementById('popup2')
    popup2.classList.toggle('active2')
    var popup = document.getElementById('popup')
    popup.classList.toggle('active2')

  }


  function closeform(){
    var popup2 = document.getElementById('popup2')
    var popup = document.getElementById('popup')
    if(popup.classList[1] && popup.classList[1]==="active2"){
      popup.classList.toggle('active2')
    }
    if(popup2.classList[1] && popup2.classList[1]==="active2"){
      popup2.classList.toggle('active2')
    }
    var blur = document.getElementById('blur')
    blur.classList.toggle('active1')
  }

  return (
    <div className="landing-page__container">
    {/* header equivalent to above body{header tag} tag*/}
    <Header handlePopUp={handlePopUp}/>
    {/* header ends*/}

    {/* body equivalent to  body tag start*/}
    <div className="homepage" id="blur">

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

                        <SecondaryButton onClick={handlePopUp} name={"Dashbourd"}/>

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
        <div className="layout-container-content">
            <Layout handlePopUp={handlePopUp}/>
        </div>

    </div>
    {/* body equivalent to  body tag end*/}

    {/* footer start*/}
    {/* footer end*/}

    {/* pop up froms start*/}
    <div className="popup" id="popup">
    <Login2 history={history} handlePopUp2={handlePopUp2} closeform={closeform}/>
    </div>
    <div className="popup2" id="popup2">
      <Register2 history={history} handlePopUp2={handlePopUp2} closeform={closeform}/>
    </div>
    {/* pop up froms end*/}


    </div>
  )
}

export default LandingPage
