import React, { Fragment, useState } from 'react'

const EditTodo = ({todo}) => {
  const editText = async id => {
    try {
      const body = { description }
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      window.location = '/'
    } catch (err) {
      console.error(err.message)
    }
  }

  const [description, setDescription] = useState(todo.description)

  return (
    <Fragment>
      <button 
        className="btn btn-warning" 
        type="button" 
        data-toggle="modal" 
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div 
        className="modal fade" 
        id={`id${todo.todo_id}`}
        tabIndex="-1" 
        role="dialog" 
        aria-labelledby="exampleModalLabel" 
        aria-hidden="true"
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit here!</h5>
              <button 
                data-dismiss="modal" 
                className="close" 
                type="button" 
                aria-label="Close"
                onClick={() => setDescription(todo.description)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={e => setDescription(e.target.value)} 
              />
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => editText(todo.todo_id)}
              >
                Save changes
              </button>
              <button  
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditTodo
