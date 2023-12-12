import React, { useState } from "react";

//after making props in wrapper(parent), pass through addTodo
const ToDoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    // need to send state to parent, need to use props (addTodo)
    addTodo(value)
    //replace console.log with addTodo after making props in wrapper, and after passing through addTodo
    setValue("")
    //setValue("") along with the value={value} will clear the text box
  }
  return (
    <form className="ToDoForm" onSubmit={ handleSubmit }>
      <input type="text" className="toDo-input" value={value} placeholder="What is your task?" onChange={ (e) => setValue(e.target.value) }/>
      {/* use console.log(e.target.value) to verify that it works, then use setValue in place of console.log */}
      <button type="submit" className="toDo-btn">Add Task</button>
    </form>
  )
}

export default ToDoForm