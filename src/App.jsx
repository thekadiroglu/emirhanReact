import React, { useState, useRef, useEffect } from 'react'
import ProductList from './emirhan'
import './App.css'
import TodoList from './Todolist'
import Header from './components/Header'
import Automation from './Manav'



function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
 
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: Math.random().toString(16).substring(2), name: name, complete: false, }]
    })
    todoNameRef.current.value = null
  }
  function changeComplete(id) {
    setTodos( todos.map(item => {
      if (item.id === id) {
       
        item.complete= !item.complete 
          }
          return item
      })
      )    
   
  }
  function clearTodos() {
    setTodos([])
  }
  return (

    <div>
      {/* <Header/>
      <TodoList todos={todos} changeComplete = {changeComplete}  />
      <input placeholder='Write your Todo' className='TodoInput' ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={clearTodos}>Clear Complete</button>
     
      <div>{todos.filter(todo => !todo.complete).length}  left to do</div>
     */}
      <Automation/>
    </div> 
   
  )
}

export default App;