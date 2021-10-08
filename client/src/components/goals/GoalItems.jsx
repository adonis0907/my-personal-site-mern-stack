import React from 'react'
import './GoalItems.css'

const GoalItems = ({btnText,text,image,alt,title}) => {
  return (
    <div className="landing__feature-box">
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{text}</p>
      <button href="#" className="landing__features-btn link">{btnText}</button>
    </div>
  )
}

export default GoalItems
