import React from 'react'
import {faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import GoalItems from '../goals/GoalItems'
import ProductItem from '../productItem/ProductItem'
import SecondaryButton from '../buttons/SecondaryButton'
import dashbourd from './../images/dashboard.png'
import feature1 from './../images/design.svg'
import feature2 from './../images/intelligence.svg'
import feature3 from './../images/game-dev.svg'
import product1 from "./../images/phone.svg"

const Content = () => {
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
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              </div>
              </div>
        </section>
        <section className="landing__products" id="products">
        <h1 className="landing__heading">On Going <span>prodjects</span> </h1>
          <div className="landing__product-slider swiper">

              <div className="landing__product-wrapper">
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              </div>
              </div>
        </section>
        <section className="landing__products" id="products">
        <h1 className="landing__heading">My <span>blogs</span> </h1>
          <div className="landing__product-slider swiper">

              <div className="landing__product-wrapper">
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              <ProductItem
                title={"fresh orange"}


                product={product1}
              />
              <ProductItem
                title={"fresh orange"}


                product={product1}
              />
              <ProductItem
                title={"fresh orange"}

                product={product1}
              />
              </div>
              </div>
        </section>
    </main>
  )
}

export default Content
