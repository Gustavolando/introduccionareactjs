import React from 'react'
import './AllCompleted.css'

const AllCompleted = () => {
  return (
    <div className="AllCompleted">
      <i className="fa fa-coffee" aria-hidden="true"></i>
      <p>¡Has completado todos tus <span>TODO</span>s!</p>
      <p>Es hora de un merecido descanzo</p>
    </div>
  )
}

export { AllCompleted }