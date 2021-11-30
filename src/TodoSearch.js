import React from "react";
import './TodoSearch.css'

const TodoSearch = () => {
  return (
    <>
      <section className="TodoSearch">
        <input placeholder="Cebolla" />
        <i className="fa fa-search" aria-hidden="true"></i>

      </section>
    </>
  )
}

export { TodoSearch }