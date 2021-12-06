import React from "react";
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)

  const textareaRef = React.useRef()

  React.useEffect(() => {
    textareaRef.current.focus()
  }, [])
  
  const onChange = (event) => {
    setNewTodoValue((prevState) => {
      let eventValue = ''
      if (event.target.value.length > 40) {
        eventValue = prevState
      } else {
        eventValue = event.target.value
      }
      return eventValue
    })
  }
  const onCancel = () => {
    setOpenModal(false)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if (newTodoValue.length > 0) {
      addTodo(newTodoValue)
      setOpenModal(false)
    } else {
      textareaRef.current.focus()
    }
  }
  return (
    <form 
      className="TodoForm"
      onSubmit={onSubmit}
    >
      <label>Escribe tu nuevo <span>TODO</span></label>
      <textarea 
        ref={textareaRef}
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <p>{newTodoValue.length}/40</p>
      <div className="TodoForm-buttons">
        <button
          type="submit"
          className="TodoForm-buttons__button TodoForm-buttons--submit"
        >
          Añadir
        </button>
        <button
          type="button"
          className="TodoForm-buttons__button TodoForm-buttons--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
      </div>
    </form>
  )
}

export { TodoForm }