import React, { useState } from 'react'

function TodoList({todoList, removeTodo, handleEdit}) {
  const [status, setStatus] = useState(null);  // To track the active element
  
  
  
  const checkStatus = (ids) => {
    todoList.filter((v,i) => {
      if (v===ids) {
        setStatus(ids);  // Set the completed todo's id
        
      }
      return(
        v
      )
    })
  }

  
  let todoData = todoList.map((v,i)=>{
    return(
      <li key={i} className={`bg-slate-400 py-2 px-5 flex justify-between items-center border-b-2 ${(status === v) ? 'strike-through' : ''}`} >
        {v} 
        <div className="btn-group flex gap-2">
        <button className="bg-[red] py-1 px-4 text-white" onClick={()=>removeTodo(v)}>Remove</button>
        <button className="bg-[green] py-1 px-4 text-white" onClick={()=>checkStatus(v)}>Done</button>
        <button className="bg-[blue] py-1 px-4 text-white" onClick={()=>handleEdit(v)}>Edit</button>
        </div>
      </li>
    )
  })
  
  
  return (
    <>
      <ul className="todolist list-decimal max-w-[500px] m-auto">
        {todoData}
      </ul>
    </>
  )
}

export default TodoList