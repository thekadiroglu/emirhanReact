import React, {useEffect} from "react";
import Todo from './Todo'


export default function TodoList({ todos, changeComplete }) {
   
    return (
        
        todos.map(todo => {
            return <Todo key={todo} todo={todo} changeComplete = {changeComplete} />
        })
        
    )
}