import React from 'react'
import './Product.css'
import ProductItem from '../productItem/ProductItem'
import {
  faStar,
  faStarHalfAlt
 } from '@fortawesome/free-solid-svg-icons';
import product1 from "../../images/product-1.png"
import product2 from "../../images/product-2.png"
import product3 from "../../images/product-3.png"
import product4 from "../../images/product-4.png"
import product5 from "../../images/product-5.png"
import product6 from "../../images/product-6.png"
import product7 from "../../images/product-7.png"
import product8 from "../../images/product-8.png"


const Product = () => {
  return (
    <section className="ecom__products" id="products">
    <h1 className="ecom__heading">Our <span>products</span> </h1>
      <div className="ecom__product-slider swiper">

          <div className="ecom__product-wrapper">
              <ProductItem
                title={"fresh orange"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product1}
              />

              <ProductItem
                title={"fresh onion"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product2}
              />

              <ProductItem
                title={"fresh meat"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product3}
              />
              <ProductItem
                title={"fresh cabbage"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product4}
              />

              <ProductItem
                title={"fresh potatoes"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product5}
              />
              <ProductItem
                title={"fresh avocado"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product6}
              />
              <ProductItem
                title={"fresh carrot"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product7}
              />
              <ProductItem
                title={"green lemon"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product8}
              />
          </div>
          <div className="ecom__product-wrapper">
              <ProductItem
                title={"fresh orange"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product1}
              />

              <ProductItem
                title={"fresh onion"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product2}
              />

              <ProductItem
                title={"fresh meat"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product3}
              />
              <ProductItem
                title={"fresh cabbage"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product4}
              />

              <ProductItem
                title={"fresh potatoes"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product5}
              />
              <ProductItem
                title={"fresh avocado"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product6}
              />
              <ProductItem
                title={"fresh carrot"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product7}
              />
              <ProductItem
                title={"green lemon"}
                star1={faStar}
                star2={faStar}
                star3={faStar}
                star4={faStar}
                star5={faStarHalfAlt}
                product={product8}
              />
          </div>
      </div>

    </section>
  )
}

export default Product
