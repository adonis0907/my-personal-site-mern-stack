import React from 'react'
import './cardSection.css'
import Card from './Card'

const CardSection = ({title,text,img,alt,cote,cardTitle,cardSubtext,buttonName,goToPage}) => {
  return (
    <div className="cardsection-container">
      <div className="card-left">
          <h2 className="card-heading">
            {title}
          </h2>
          <p className="paragraph">{text}</p>
      </div>
      <div className="card-right">
        <Card
        img={img}
        alt={alt}
        cote={cote}
        cardTitle={cardTitle}
        cardSubtext={cardSubtext}
        buttonName={buttonName}
        goToPage={goToPage}


        />
      </div>


    </div>
  )
}

export default CardSection
