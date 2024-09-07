import React from 'react'

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`} >
        {name}

    </button>
  )
}

export default Button