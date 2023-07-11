import React, { Children } from "react";

export default function Todo({ todo, changeComplete }) {

    function handleTodoClick() {
        changeComplete(todo.id)
        console.log(todo.id);
    }
    console.log(todo.complete);
    return (
        <div className="screen">
            <label>
                <input className="check" type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
                <button className="edtBtn">Edit</button>
                </label>
        </div>
    )
}
