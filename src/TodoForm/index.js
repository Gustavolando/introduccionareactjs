import React from "react";
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onCancel = () => {
    setOpenModal(false)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  return (
    <form 
      className="TodoForm"
      onSubmit={onSubmit}
    >
      <label>Escribe tu nuevo <span>TODO</span></label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttons">
        <button
          type="button"
          className="TodoForm-buttons__button TodoForm-buttons--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-buttons__button TodoForm-buttons--submit"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }