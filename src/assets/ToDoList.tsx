import { useDispatch, useSelector } from "react-redux";
import  { useState } from "react";
import { finishedToDo, removeToDo, editToDo } from "./feature/todoSlice";

const ToDoList = () => {

  const [newTodoData, setNewTodoData] = useState("")
  
  type Todo = {
    id: string;
    text: string;
    toggleCompleted : boolean;
  }

  console.log(newTodoData);
  

  type StateType = {
    todos: Todo[];
  }


  const todoList = useSelector((state: StateType) => state.todos);
  const dispatch = useDispatch();

  const handleCheckboxChange = (todoid:string) => {
    dispatch(finishedToDo(todoid))
  }

  const handleEditChange = (newTodo: Todo) => {
    dispatch(editToDo(newTodo))
  }

  
  return (
    <>
      {todoList.map((todo: Todo) => {
        if(todo.id){
          return(
            <div className="flex mb-2 justify-center font-bold font-mono text-xl" key={todo.id}>
           <div className="border-0 bg-[#f7f0d3] border-black px-8 py-4 shadow-lg rounded-lg">
            <input className=" mr-2" type="checkbox" onChange = {() => handleCheckboxChange(todo.id)} />
            <input onChange={(e) => {setNewTodoData(e.target.value)}} value={todo.text} className={`border-2 border-gray w-[150px] lg:w-[300px] px-4 lg:mr-2 mr-1 py-2 rounded-xl shadow-lg ${todo.toggleCompleted ?'line-through' : '' } `} type="text" />
            <button onClick={() => {handleEditChange(todo)}} className="mr-2 px-1 rounded-xl font-mono font-semibold py-1">✏️</button>
            <button onClick={() => {dispatch(removeToDo(todo.id))}} className="px-1 hover:bg-[#efd8a4] rounded-xl font-mono font-semibold py-1">❌</button>
          </div>
        </div>
          )
        }
      })}
    </>
  );
}

export default ToDoList;
