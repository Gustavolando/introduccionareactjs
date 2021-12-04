import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }

  return (
    <>
      <section className="TodoSearch">
        <input 
          value={searchValue}
          onChange={onSearchValueChange}
          placeholder="Cebolla" 
        />
        <i className="fa fa-search" aria-hidden="true"></i>

      </section>
    </>
  )
}

export { TodoSearch }