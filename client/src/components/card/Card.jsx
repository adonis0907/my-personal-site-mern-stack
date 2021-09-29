import React from 'react'
import './card.css'
const Card = ({img,alt,cote,cardTitle,cardSubtext,buttonName,goToPage}) => {
  return (
    <div className="main-card-container">
        <div className="blog-slider">
            <div>
            {/*fist starts*/}
                <div className="blog-slider__item">
                      <div className="blog-slider__img">

                          <img src={img} alt={alt}/>
                      </div>
                      <div className="blog-slider__content">
                        <span className="blog-slider__code">{cote}</span>
                        <div className="blog-slider__title">{cardTitle}</div>
                          <div className="blog-slider__text">{cardSubtext}</div>
                            <button onClick={goToPage} className="blog-slider__button">{buttonName}</button>
                          </div>
                        </div>
                        {/*fist ends*/}


            </div>
            <div className="blog-slider__pagination"></div>
            </div>
    </div>
  )
}

export default Card
