import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)
  const [allCompleted, setAllCompleted] = React.useState(false)

  const checkAllCompleted = (todos) => {
    if (Array.isArray(todos)) {
      const completedTodos = todos.filter(todo => !!todo.completed).length
      const totalTodos = todos.length  
      if (totalTodos > 0 && (completedTodos === totalTodos)) {
        setAllCompleted(true)
      } else {
        setAllCompleted(false)
      }
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItems;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItems = initialValue
        } else {
          parsedItems = JSON.parse(localStorageItem)
        }

        setItem(parsedItems)
        checkAllCompleted(parsedItems)
        setLoading(false)

      } catch (error) {
        setError(error)
      }
    }, 1500);
  },[initialValue, itemName])

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
      checkAllCompleted(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
    allCompleted
  }
}

export { useLocalStorage }