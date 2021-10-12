import React from 'react'
import './Blog.css'
import BlogItem from './blogItem/BlogItem'
import img1 from '../images/blog-1.jpg'
import img2 from '../images/blog-2.jpg'
import img3 from '../images/blog-3.jpg'

import {
  faUser,
  faCalendar
 } from '@fortawesome/free-solid-svg-icons';


const Blog = () => {
  return (

    <section className="main__blogs1" id="main__blogs1">
      <h1 className="landing__heading">current<span>blogs</span></h1>

      <div className="main__blog1-box-container">



    <BlogItem
      img={img1}
      title={"fresh and organic vegitables and fruits"}
      text={"If you want them you can alway come and get them in buea behind the old market.i will give you fair price."}
      icon1={faUser}
      icon2={faCalendar}
     />

     <BlogItem
       img={img2}
       title={"fresh and organic vegitables and fruits"}
       text={"If you want them you can alway come and get them in buea behind the old market.i will give you fair price."}
       icon1={faUser}
       icon2={faCalendar}
      />

      <BlogItem
        img={img3}
        title={"fresh and organic vegitables and fruits"}
        text={"If you want them you can alway come and get them in buea behind the old market.i will give you fair price."}
        icon1={faUser}
        icon2={faCalendar}
       />
         </div>


    </section>
  )
}

export default Blog
