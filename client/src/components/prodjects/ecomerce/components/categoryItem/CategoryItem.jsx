import React from 'react'
import './CategoryItem.css'

const CategoryItem = ({img,title,text,btnName}) => {
  return (
    <div className="ecom__cat-box">
      <img src={img} alt=""/>
      <h3>{title}</h3>
      <p>{text}</p>
      <button href="#" className="ecom__cat-btn link">{btnName}</button>
    </div>
  )
}

export default CategoryItem
