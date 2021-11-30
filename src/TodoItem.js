import React from "react";
import './TodoItem.css'

const TodoItem = (props) => {
  const { text, completed } = props;

  const onCompleted = () => {
    alert('Ya completaste el TODO ' + text)
  }
  
  const onDelete = () => {
    alert('Borraste el TODO ' + text)
  }

  return (
    <li className="TodoItem">
      {/* <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>C</span> */}
      <section className="TodoItem__todo">
        <i 
          onClick={onCompleted}
          className={`fa fa-check Icon Icon-check ${completed && 'Icon-check--active'}`} 
          aria-hidden="true"
          ></i>
        <p className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>{ text }</p>
        {/* <span className="Icon Icon-delete">X</span> */}
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