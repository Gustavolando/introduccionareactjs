import React from "react";
import './TodoSearch.css'

const TodoSearch = ({searchValue, setSearchValue}) => {
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