import React from 'react'
import './Feature.css'
import FeatureItem from '../featureItem/FeatureItem'
import feature1 from '../../images/feature-img-1.png'
import feature2 from '../../images/feature-img-2.png'
import feature3 from '../../images/feature-img-3.png'
const Feature = () => {
  return (
    <section className="ecom__features" id="ecom__features">
      <h1 className="ecom__heading">Our <span>features</span> </h1>

      <div className="ecom__box-container">
      <FeatureItem
        btnText={"read more"}
         text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium leo et sagittis maximus. Nam dictum pharetra diam, eu dictum diam feugiat sed"}
         image={feature1}
         alt={"juice"}
         title={"fresh and organic"}/>

       <FeatureItem
       btnText={"read more"}
       text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium leo et sagittis maximus. Nam dictum pharetra diam, eu dictum diam feugiat sed"}
       image={feature2}
       alt={"juice"}
       title={"free delivery"}/>

        <FeatureItem
        btnText={"read more"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium leo et sagittis maximus. Nam dictum pharetra diam, eu dictum diam feugiat sed"}
        image={feature3}
        alt={"juice"}
        title={"easy payments"}/>
        </div>

    </section>
  )
}

export default Feature
