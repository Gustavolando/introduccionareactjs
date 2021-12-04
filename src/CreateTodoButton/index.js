import React from "react";
import './CreateTodoButton.css'

const CreateTodoButton = ({ setOpenModal }) => {
  
  const onClickButtom = () => {
    setOpenModal(prevState => !prevState)
  }

  return (
    <i 
      onClick={onClickButtom} 
      className="CreateTodoButton fa fa-plus" 
      aria-hidden="true"
    ></i>
  )
}

export { CreateTodoButton }