import React from 'react'
import './primaryButton.css'
const PrimaryButton = ({name ,onClick}) => {
  return (
    <button onClick={onClick} className="btn-main-primary">
    {name}
    </button>
  )
}

export default PrimaryButton
