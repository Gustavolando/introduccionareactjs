import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props) {
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
    allCompleted
  } = useLocalStorage('TODOS_V1', [])
  
  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  let searchedTodos = []
  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }
  
  const checkDuplicates = (todoS, text) => {
    let newText = text
    let counter = 1
    let repeatedTodo = todoS.filter(todo => todo.text === text).length
    while (repeatedTodo > 0) {
      newText = text + '(' + counter + ')'
      repeatedTodo = todoS.filter(todo => todo.text === newText).length
      counter++
    }
    return newText
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    let finalText = checkDuplicates(newTodos, text)
    newTodos.push({
      completed: false,
      text: finalText,
    })
    saveTodos(newTodos)
  }
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos, 
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodo,
      openModal,
      setOpenModal,
      allCompleted
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }