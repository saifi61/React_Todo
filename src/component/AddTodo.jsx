import React from "react";
import { MdFileDownloadDone } from "react-icons/md";
function AddTodo(props) {
    const [item, setItem] = React.useState({
        name: '',
        dueDate: ''
    })
    const [todoName, setTodoName] = React.useState("");
    const [dueDate, setDueDate] = React.useState("");

    const handleNameChange = (event) =>{
        setTodoName(event.target.value);
    }
    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    }

    const handleBtnClick =() => {
        props.onNewItem(todoName,dueDate);
        setTodoName("");
        setDueDate("");
    }

    return (
        <div className="container item-container">
            <div className="row kg-row">
                <div className="col-4">
                <input type="text" placeholder="Enter todo here" 
                    onChange={handleNameChange}
                    value={todoName}
                />
                </div>
                <div className="col-4">
                <input type="date" name="" id="" 
                    onChange={handleDateChange}
                    value={dueDate}
                />
                </div>
                <div className="col-2">
                <button type="button" className="btn btn-success kg-btn"
                    onClick={handleBtnClick}
                >
                    <MdFileDownloadDone />
                </button>
                </div>
            </div>
      </div>
    )
}
export default AddTodo;