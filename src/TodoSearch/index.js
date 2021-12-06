import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  const refInput = React.useRef()
  React.useEffect(() => {
    refInput.current.focus()
  },[])

  return (
    <section className="TodoSearch">
      <input 
        ref={refInput}
        value={searchValue}
        onChange={onSearchValueChange}
        placeholder="Cebolla" 
      />
      <i className="fa fa-search" aria-hidden="true"></i>
    </section>
  )
}

export { TodoSearch }