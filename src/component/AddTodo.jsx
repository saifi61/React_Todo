function AddTodo() {
    return (
        <div className="container item-container">
            <div className="row kg-row">
                <div className="col-4">
                <input type="text" placeholder="Enter todo here" />
                </div>
                <div className="col-4">
                <input type="date" name="" id="" />
                </div>
                <div className="col-2">
                <button type="button" className="btn btn-success kg-btn">Add</button>
                </div>
            </div>
      </div>
    )
}
export default AddTodo;