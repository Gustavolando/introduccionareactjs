import React from "react";
import './TodoItem.css'

const TodoItem = ( { text, completed, onComplete, onDelete } ) => {

  return (
    <li className="TodoItem">
      <section className="TodoItem__todo">
        <i 
          onClick={onComplete}
          className={`fa fa-check Icon Icon-check ${completed && 'Icon-check--active'}`} 
          aria-hidden="true"
          ></i>
        <p className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>{ text }</p>
      </section>
      <i 
        onClick={onDelete}
        className="fa fa-times Icon Icon-delete" 
        aria-hidden="true"
      ></i>
    </li>
  )
}

export { TodoItem }