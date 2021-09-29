import React from 'react'
import './primaryButton.css'
const SecondaryButton = ({name ,onClick}) => {
  return (
    <button onClick={onClick} className="btn-main-seconday">
    {name}
    </button>
  )
}

export default SecondaryButton
