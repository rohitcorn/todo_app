import React, { useState } from 'react'
import TodoList from "../components/TodoList";

function Todo() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const todoItem = {
    title: '',
    status: false,
  }
  const [editId, setEditId] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();
    let todoName = e.target.todoname.value;
    todoList.
    if (todoInput === '') {
      alert("please add todo");
    }
    else if(!todoList.includes(todoName)){
      setTodoList([...todoList,todoName]); 
    }
    else {
      alert("duplicate todo add other todo");
    }
    setTodoInput('');
  }

  const removeTodo = (id) => {
    const removeData = todoList.filter((v) => v!==id)
    setTodoList(removeData)
    console.log(id);
  }

  const handleEdit = (id) => {
    const dt = todoList.filter(v => v.id === id);
    if (dt !== undefined) {
      setTodoInput(dt[0].todoInput)

      // Optionally, store the id of the todo being edited
      setEditId(id);
    }
  }

  // Function to update the todo item
  const handleUpdate = () => {
    setTodoList(
      todoList.map(todo =>  
        todo.id === editId ? { ...todo, todoInput: todoInput } : todo
      )
    );

    // Clear input field and reset editId after updating
    setTodoInput('');
    setEditId(null);
  };

  
  return (
    <>
    <div className="container max-w-[500px] m-auto">
      <form className="todowrap flex max-w-[500px] m-auto bg-slate-600 p-10" onSubmit={addTodo}>
        <input type="text" className="border w-full" name="todoname" onChange={(e)=>setTodoInput(e.target.value)} value={todoInput}/>
        <button className="bg-[blue] text-white py-2 px-4 w-[150px]">add todo</button>
        <button className="bg-[blue] text-white py-2 px-4 w-[150px]" onClick={handleUpdate}>update</button>
      </form>
      <TodoList todoList={todoList} removeTodo={removeTodo} handleEdit={handleEdit}/>
    </div>
    </>
  )
}

export default Todo