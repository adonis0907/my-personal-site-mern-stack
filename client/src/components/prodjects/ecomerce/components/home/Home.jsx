import React from 'react'
import './Home.css'
import Image from "./banner-bg.webp"
const Home = () => {
  return (
    <section className="ecom__home" id="ecom__home"style={{ backgroundImage: 'url(' + Image + ')' }} >

    <div className="ecom__content">
      <h3>fresh and <span>organic</span> products for you</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium leo et sagittis maximus. Nam dictum pharetra diam, eu dictum diam feugiat sed.</p>
      <a href="#" className="ecom__home-btn link">shop now</a>
    </div>

    </section>
  )
}

export default Home
