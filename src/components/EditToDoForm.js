import React, { useState } from "react";

//after making props in wrapper(parent), pass through addTodo
export const EditToDoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();
    // need to send state to parent, need to use props (addTodo)
    editTodo(value, task.id)
    //replace console.log with addTodo after making props in wrapper, and after passing through addTodo
    setValue("")
    //setValue("") along with the value={value} will clear the text box
  }
  return (
    <form className="EditToDoForm" onSubmit={ handleSubmit }>
      <input type="text" className="toDo-input" value={value} placeholder="Update Task" onChange={ (e) => setValue(e.target.value) }/>
      {/* use console.log(e.target.value) to verify that it works, then use setValue in place of console.log */}
      <button type="submit" className="toDo-btn">Update Task</button>
    </form>
  )
}

// export default ToDoForm;