import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {

 const todos = props.todos;
 const setTodos = props.settodos;

const [title , setTitle] = useState("");

const SubmitHandler = (e) => {
    e.preventDefault(); // on submit OFform page not relaod using this
    const newTodo = {
      id : nanoid(),
      title,
      isCompleted : false,
    };
    
    let copyTodos = [...todos];// copy all todos data in that variable
    copyTodos.push(newTodo); // new todo add in storeTodos
    setTodos(copyTodos);
    
    
    setTitle(""); // when we submit it automatically emty the input box on ui
  }

  return (
   
  <div className="border w-[60%] p-10 ">
    <h1 className=" text-5xl font-thin mb-10">

      Set <span className="text-red-500 font-thin">Reminders</span> for tasks

    </h1>

    <form onSubmit={SubmitHandler}>

      <input
       className="border-b w-full mb-10 p-2 outline-0 text-2xl font-thin"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="title..." 
      />

      <button
      className="text-xl px-10 py-2 border-amber-600 border rounded "
      type="submit"  
      >
        + Add Todo
      </button>
    </form>
  </div> 


  )
}

export default Create