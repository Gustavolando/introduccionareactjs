import React from 'react'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"
import { TodoLoad } from '../TodoLoad';
import { TodoError } from '../TodoError'
import { EmptyTodos } from '../EmptyTodos';
import { AllCompleted } from '../AllCompleted';

function AppUI() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    allCompleted
  } = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && (
          <TodoError />
        )}
        {loading && (
          <>
            <TodoLoad/>
            <TodoLoad/>
            <TodoLoad/>
          </>
        )}
        {(!loading && !searchedTodos.length) && (
          <EmptyTodos />
        )} 
        {(allCompleted && !!searchedTodos.length) && (
          <AllCompleted />
        )}
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal} 
      />
    </React.Fragment>
  )
}

export { AppUI }