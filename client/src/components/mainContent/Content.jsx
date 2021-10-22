import React from 'react'
import GoalItems from '../goals/GoalItems'
import ProductItem from '../productItem/ProductItem'
import SecondaryButton from '../buttons/SecondaryButton'
import Blog from '../blogs/Blog'
import Footer from '../footer/Footer'
import dashbourd from './../images/dashboard.png'
import feature1 from './../images/design.svg'
import feature2 from './../images/intelligence.svg'
import feature3 from './../images/game-dev.svg'
import product1 from "./../images/blogs/blog1.svg"
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'

const Content = () => {
  const [lists,setLists]=useState([])
  const [error,setError] =useState("")


  useEffect(()=>{
    // if(!localStorage.getItem("authToken")){
    //   history.push("/login")
    // }
    const fetchPrivateData = async () =>{
      const config = {
        headers:{
          "Content-Type":"application/json"
          // Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try{
        // const {data} = await axios.get("/api/private",config)
        const getallList = await axios.get("/api/private/getallprodject",config)
        // const getallList = await axios.get(`/api/private/getalllists${type?"?type="+type:""}${genre ? "&genre="+genre:""}`,config)
        setLists(getallList.data)

      }catch(error){

        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }

    fetchPrivateData()
  },[])
    if(lists.length===0){
      return("loading ...")
    }
  return (
    <main>

        <div className="home-cover" id="home">
          {/*this is where the gradient starts*/}
                <div className="block">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
          {/*this is where the gradient ends*/}
          <div className="landing__content-container">
          {/*this is where the text container starts*/}
                <div className="landing__left-content">
                    <div className="landing__text">
                    <h1> My portfolio web version 2.0</h1>
                    <p>
                    A MERN aplication with an amazing dashboard and a tutorial section to help perpare for job coding chanlange.
                    </p>
                      <div className="landing__button-area">
                        <Link to="/"> Contact </Link>

                        <SecondaryButton  name={"Dashbourd"}/>

                      </div>
                    </div>
                </div>
          {/*this is where the text container ends*/}

          {/*image container showing dashboard starts*/}
                <div className="landing__right-content">
                    <div className="img-wrapper-tablet">
                      <img src={dashbourd} alt="" />
                    </div>
                </div>
          {/*image container showing dashboard ends*/}
          </div>
        </div>


        <section className="landing__features section1" id="landing__features">
          <h1 className="landing__heading ">My <span>Services</span> </h1>
          <div className="landing__box-container">
          <GoalItems
            btnText={"Get Started"}
             text={"Paths to take, assignments and real projects to help you blandinge a full stack developer under 4-6months"}
             image={feature1}
             alt={"juice"}
             title={"Full Stack Web Development"}/>
         <GoalItems
           btnText={"Get Started"}
            text={"This Interview Preparation Kit has challenges and notes to prepare you ace your interview in a week's time."}
            image={feature2}
            alt={"juice"}
            title={"Algorithms and Data Structures"}/>
        <GoalItems
          btnText={"Get Started"}
           text={"Game development is a software development process, as a video game is software with art, audio, and gameplay."}
           image={feature3}
           alt={"juice"}
           title={" Games/Software Development"}/>
          </div>
        </section>
        <section className="landing__products" id="products">
        <h1 className="landing__heading">Complete <span>prodjects</span> </h1>
          <div className="landing__product-slider swiper">

              <div className="landing__product-wrapper">
              {lists.data.map((prodject,index)=>(
                <ProductItem
                  title={prodject.title}
                  text={prodject.desc}
                  product={`http://localhost:5000/${prodject.filePath}`}
                />
              ))}


              </div>
              </div>
        </section>

        <Blog />
        <Footer />
    </main>
  )
}

export default Content
