import React from "react";
import './TodoSearch.css'

const TodoSearch = () => {

  const [searchValue, setSearchValue] = React.useState('')

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }

  return ([
    <>
      <section className="TodoSearch">
        <input 
          value={searchValue}
          onChange={onSearchValueChange}
          placeholder="Cebolla" 
        />
        <i className="fa fa-search" aria-hidden="true"></i>

      </section>
    </>,
    <p>{searchValue}</p>
  ])
}

export { TodoSearch }