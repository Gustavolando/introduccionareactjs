import React from "react";
import './CreateTodoButton.css'

const CreateTodoButton = () => {
  
  const onClickButtom = (msg) => {
    alert(msg)
  }

  return (
    <>
      {/* <button>+</button> */}
      <i onClick={() => onClickButtom('Aqui se debería abrir el modal')} className="CreateTodoButton fa fa-plus" aria-hidden="true"></i>
    </>
  )
}

export { CreateTodoButton }