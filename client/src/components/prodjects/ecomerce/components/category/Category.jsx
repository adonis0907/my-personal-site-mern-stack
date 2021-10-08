import React from 'react'
import './Category.css'
import cat1 from '../../images/cat-1.png'
import cat2 from '../../images/cat-2.png'
import cat3 from '../../images/cat-3.png'
import cat4 from '../../images/cat-4.png'

import CategoryItem from '../categoryItem/CategoryItem'

const Category = () => {
  return (
    <section className="ecom__categories" id="ecom__categories">
    <h1 className="ecom__heading">product <span>categories</span> </h1>

    <div className="ecom__cat-box-container">
      <CategoryItem
        img={cat1}
        title={"vegetables"}
        text={"upto 45% off"}
        btnName={"shop now"}
      />
      <CategoryItem
        img={cat2}
        title={"fresh fruits"}
        text={"upto 45% off"}
        btnName={"shop now"}
      />
      <CategoryItem
        img={cat3}
        title={"dairy products"}
        text={"upto 45% off"}
        btnName={"shop now"}
      />
      <CategoryItem
        img={cat4}
        title={"fresh meat"}
        text={"upto 45% off"}
        btnName={"shop now"}
      />
    </div>
    </section>
  )
}

export default Category
