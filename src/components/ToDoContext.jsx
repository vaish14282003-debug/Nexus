/*import React, { createContext, useState, useContext } from 'react';

const ToDoContext = createContext();

// Custom hook to use todos
export const useTodos = () => useContext(ToDoContext);  // Correct export name

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Function to add a todo
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Function to remove a todo
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to toggle completion status of a todo
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <ToDoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </ToDoContext.Provider>
  );
};
*/
