import React, { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from './ToDo'
uuidv4();

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    //add props here first, then import prop in ToDoForm
    console.log(todos)
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed : !todo.completed } : todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
    //if the todo.id is not equal, then we want to return that value; removes that value
  }
  return (
    <div className="ToDoWrapper">
      <h1>Things to do:</h1>
      <ToDoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      ))}
    </div>
  )
}

// export default ToDoWrapper;