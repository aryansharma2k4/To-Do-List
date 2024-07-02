import { FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./feature/todoSlice"
const TodoForm = () => {

  const [data, setData] = useState("")
  const handleFormSubmit = (e:FormEvent<HTMLElement>) => {
    dispatch(addTodo(data))
    e.preventDefault()
    setData("")
  }

  type Todo = {
    id:string;
    name: string;
  }

  type StateType = {
    todos : Todo[];
  }

  const todoData = useSelector((state:StateType) => state.todos)  
  const dispatch = useDispatch()

  return (
    <form onSubmit={handleFormSubmit} action="" className='flex mb-20 justify-center mt-8'>
        <input onChange={(e) => setData(e.target.value)} value={data} type="text" placeholder="ToDo" className="border-[1px] rounded-md border-gray font-mono text-xl py-2 font-bold shadow-lg px-4 mr-8 w-[368px] h-8" />
        <button type="submit" className="font-semibold font-mono text-xl border-[1px] px-2 rounded-xl border-gray shadow-lg">Add To-Do</button>
    </form>
  )
}

export default TodoForm