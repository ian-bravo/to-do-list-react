import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

//adding {task} so we can use that prop in wrapper/return map fx
//by adding toggleComplete, we grey out the task with onClick and ternary
//add deleteTodo after making onClick for faTrash
export const ToDo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className="ToDo">
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

// export default ToDo;