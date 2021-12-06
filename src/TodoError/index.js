import React from "react";
import './TodoError.css'

const TodoError = () => {
  return (
    <div className="TodoError">
      <i className="fa fa-grav" aria-hidden="true"></i>
      <p>Vaya, parece que encontramos un problema, danos un poco de tiempo y vuelve a intentar en un par de minutos...</p>
    </div>
  )
}

export { TodoError }