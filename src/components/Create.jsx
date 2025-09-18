
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { todocontext } from "../wrapper";
import { useContext } from "react";

const Create = () => {


 const [todos , setTodos ] = useContext(todocontext);
   //access the global data in child component of context without using props drilling

const{register , handleSubmit , formState : {errors} , reset } = useForm();

const SubmitHandler = (data) => {
  console.log(data);
   data.isCompleted = false ;
   data.id = nanoid();

   const copytodos = [...todos];
   copytodos.push(data);
   setTodos(copytodos);

   toast.success("Todo created!!");
   
    reset();
  }

  return (
   
  <div className=" w-[60%] p-10 ">
    <h1 className=" text-5xl font-thin mb-10">

      Set <span className="text-red-500 font-thin">Reminders</span> for tasks

    </h1>

    <form onSubmit={handleSubmit(SubmitHandler)}>

      <input
       className="border-b w-full  p-2 outline-0 text-2xl font-thin"

        {...register("title" , 
          {
            required : "title can not be empty"//validation is applied

          })}
        type="text"
        placeholder="title..." 
      />

      {errors && errors.title && errors.title.message && <small classname = "text-red-600 font-thin" > {errors.title.message} </small>}

          <br />
          <br />
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