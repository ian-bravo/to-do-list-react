import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    //add props here first, then import prop in ToDoForm
    console.log(todos)
  }
  return (
    <div className="ToDoWrapper">
      <ToDoForm addTodo={addTodo}/>
    </div>
  )
}

export default ToDoWrapper