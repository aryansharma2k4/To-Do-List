
const TodoForm = () => {
  return (
    <form action="" className='flex mb-20 justify-center mt-8'>
        <input type="text" placeholder="ToDo" className="border-[1px] rounded-md border-gray font-mono text-xl py-2 font-bold shadow-lg px-4 mr-8 w-[368px] h-8" />
        <button className="font-semibold font-mono text-xl border-[1px] px-2 rounded-xl border-gray shadow-lg">Add To-Do</button>
    </form>
  )
}

export default TodoForm