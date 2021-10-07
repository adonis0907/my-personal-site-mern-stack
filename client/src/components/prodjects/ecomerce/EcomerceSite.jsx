import React from 'react'
import './ecomercesite.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Feature from './components/feature/Feature'
import Product from './components/product/Product'
import Category from './components/category/Category'
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


    </div>
  )
}

export default EcomerceSite
