import React from "react";
import './TodoItem.css'

const TodoItem = (props) => {
  const { text, completed } = props;
  return (
    <li className="TodoItem">
      {/* <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>C</span> */}
      <section className="TodoItem__todo">
        <i className={`fa fa-check Icon Icon-check ${completed && 'Icon-check--active'}`} aria-hidden="true"></i>
        <p className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>{ text }</p>
        {/* <span className="Icon Icon-delete">X</span> */}
      </section>
      <i className="fa fa-times Icon Icon-delete" aria-hidden="true"></i>
    </li>
  )
}

export { TodoItem }