import React, { useState } from "react";

const ToDoForm = () => {
  const [value, setValue] = useState("")
  return (
    <form className="ToDoForm">
      <input type="text" className="toDo-input" placeholder="What is your task?" onChange={ (e) => console.log(e.target.value) }/>
      <button type="submit" className="toDo-btn">Add Task</button>
    </form>
  )
}

export default ToDoForm