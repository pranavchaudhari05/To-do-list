import { createContext } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

export const todocontext = createContext(null);

const Wrapper = (props) => {
    const [todos , setTodos ] = useState([
   { id : nanoid() , title :"Java notes making" , isCompleted : false },

  ])
  return <todocontext.Provider value={[todos , setTodos ]}> 
           {props.children}
       </todocontext.Provider>
  //provider supplies the value to the child components
};

export default Wrapper;