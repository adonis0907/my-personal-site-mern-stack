import React from 'react'
import './FeatureItem.css'
const FeatureItem = ({btnText,text,image,alt,title}) => {
  return (

      <div className="ecom__feature-box">
        <img src={image} alt={alt} />
        <h3>{title}</h3>
        <p>{text}</p>
        <button href="#" className="ecom__features-btn link">{btnText}</button>
      </div>

  )
}

export default FeatureItem
