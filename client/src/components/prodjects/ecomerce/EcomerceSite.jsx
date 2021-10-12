import React from 'react'
import './ecomercesite.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Feature from './components/feature/Feature'
import Product from './components/product/Product'
import Category from './components/category/Category'
import Reviews from './components/reviews/Reviews'
import Blog from './components/blogs/Blog'
import Footer from './components/footer/Footer'
const EcomerceSite = () => {
  return (
    <div className="ecomerce-body">
    {/*header component starts*/}
      <Header />
    {/*header component ends*/}

    {/*home component starts*/}
      <Home />
    {/*home component ends*/}

    {/*features component starts*/}
    <Feature />
    {/*features component ends*/}

    {/*products component start*/}
    <Product/>
    {/*products component ends*/}

    {/*category component start*/}
    <Category/>
    {/*categorys component ends*/}

    {/*category component start*/}
    <Reviews/>
    {/*categorys component ends*/}

    {/*blog component start*/}
    <Blog/>
    {/*blogs component ends*/}
    {/*footer component start*/}
    <Footer/>
    {/*footer component ends*/}

    </div>
  )
}

export default EcomerceSite
