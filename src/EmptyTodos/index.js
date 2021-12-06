import React from "react";
import './EmptyTodos.css'

const EmptyTodos = () => {
  return (
    <div className="EmptyTodos">
      <div className="EmptyTodos-icons">
        <i className="fa fa-sun-o" aria-hidden="true"></i>
        <i className="fa fa-smile-o" aria-hidden="true"></i>
      </div>
      <p>¡Crea un nuevo <span>TODO</span>!</p>
    </div>
  )
}

export { EmptyTodos }