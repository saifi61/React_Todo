import AppName from './component/AppName'
import AddTodo from './component/AddTodo'
import TodoItem from './component/TodoItem'
import './App.css'
function App() {
  const todoItems = [{
    task: "Buy Milk",
    dueDate: "14/12/2021"
  },{
    task: "Go To College",
    dueDate: "14/12/2021"
  }]

  let items = todoItems.map((item) => {
    return <TodoItem todoName={item.task} todoDate={item.dueDate}/>
  })

  return (

    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
        {items}
      </div>
    </center>
  )
}

export default App
