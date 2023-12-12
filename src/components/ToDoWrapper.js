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
  return (
    <div className="ToDoWrapper">
      <h1>Things to do:</h1>
      <ToDoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <ToDo task={todo} key={index} />
      ))}
    </div>
  )
}

// export default ToDoWrapper;