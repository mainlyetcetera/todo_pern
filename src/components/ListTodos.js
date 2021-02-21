import React, { Fragment, useState, useEffect } from 'react'
import EditTodo from './EditTodo.js'

const ListTodos = () => {
  const [todos, setTodos] = useState([])

  const deleteTodo = async id => {
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE'
      }) 

      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }

  const getTodos = async () => {
    const res = await fetch('http://localhost:5000/todos')
    const todoArray = await res.json()
    console.log('todoArray', todoArray)

    setTodos(todoArray)
  }

  useEffect(() => {
    getTodos()
  }, [todos])

  console.log(todos)

  return (
    <Fragment>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>*/}
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo}/>
              </td>
              <td>
                <button 
                  className='btn btn-danger'
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodos
