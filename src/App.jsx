import { useState } from "react"

import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {

  const [todos , setTodos ] = useState([
   //{ id : nanoid() , title :"Java notes making" , isCompleted : false },

  ])

  return (
    <div className="flex text-white w-screen h-screen bg-gray-800 p-10 ">
     <Create todos = {todos} settodos = {setTodos}/>
     <Read todos = {todos} settodos = {setTodos} />
    </div>
  )
}

export default App;