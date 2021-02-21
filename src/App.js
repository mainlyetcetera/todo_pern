import React, { Fragment } from 'react'
import InputTodo from './components/InputTodo.js'
import ListTodos from './components/ListTodos.js'
import './App.css'

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  )
}

export default App
