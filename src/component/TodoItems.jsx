import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = (props) => {
  return (
    <div className="item-container">
        {props.todoItems.map((item) => {
            return <TodoItem 
              todoName={item.task} 
              todoDate={item.dueDate}
              onDeleteClick={props.onDeleteClick}
            />
        })}
      </div>
  )
}

export default TodoItems
