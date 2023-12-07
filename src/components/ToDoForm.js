import React from "react";

const ToDoForm = () => {
  return (
    <form className="ToDoForm">
      <input type="text" className="toDo-input" placeholder="What is your task?" />
      <button type="submit" className="toDo-btn">Add Task</button>
    </form>
  )
}

export default ToDoForm