import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

//adding {task} so we can use that prop in wrapper/return map fx
export const ToDo = ({task}) => {
  return (
    <div className="ToDo">
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  )
}

// export default ToDo;