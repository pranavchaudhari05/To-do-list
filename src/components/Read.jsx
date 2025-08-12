import { useState } from "react";
import { Fragment } from "react";


const Read = (props) => {

    const todos = props.todos;
    const settodos = props.settodos;
 
    const DeleteHandler = (id) =>{

      const filtertodo = todos.filter((todo) => todo.id != id);
      settodos(filtertodo);
    }

    const renderTodos = todos.map((todo) => {
     return <li className = "bg-gray-900  text-center p-4 rounded  mb-1 flex justify-between font-thin " key={todo.id}>
     <span classname ="text-2xl  font-serif font-thin"> {todo.title}</span>  <button  className=" p-0.3 font-serif text-red-400 text-sm font-thin" onClick={() => DeleteHandler(todo.id)}>Delete</button>
      </li>
  })

  return (
    <div className=" border w-[40%] p-10 "> 
       
      <h1 className="text-5xl text-center font-thin mb-10 "><span className="text-pink-400">Pending</span> To-Do's</h1>

      <ol>{renderTodos}</ol>
       
        
    </div>

  )
}

export default Read