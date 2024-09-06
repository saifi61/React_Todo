import React from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";

import "./App.css";
import WelcomeMessage from "./component/WelcomeMessage";
function App() {
  // const initialTodoItems = [
  //   {
  //     task: "Buy Milk",
  //     dueDate: "14/12/2021",
  //   },
  //   {
  //     task: "Go To College",
  //     dueDate: "14/12/2021",
  //   },
  // ];

  const [todoItems, setTodoItems] = React.useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newArr = [
      {
        task: itemName,
        dueDate: itemDueDate
      }, ...todoItems]
    setTodoItems(newArr);
    // console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.task !== todoItemName)
    setTodoItems(newTodoItems);
    // console.log(`item Deleted : ${todoItemName}`);
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems key={todoItems.task}
        todoItems={todoItems} 
        onDeleteClick={handleDeleteItem}
      />
      
    </center>
  );
}

export default App;
