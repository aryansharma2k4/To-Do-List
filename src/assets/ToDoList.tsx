
const ToDoList = () => {
  return (
    <div className="flex justify-center font-bold font-mono text-xl">
        <div className="border-0 bg-[#f7f0d3] border-black px-8 py-4 shadow-lg rounded-lg">
            <input className="size-6 mr-2" type="checkbox" />
            <input className="border-2 border-gray w-[424px] px-4 mr-8 py-2 rounded-xl shadow-lg" type="text" />
            <button className="mr-2 px-1 rounded-xl font-mono font-semibold py-1">📁</button>
            <button className="mr-2 px-1 rounded-xl font-mono font-semibold py-1">✏️</button>
            <button className="px-1 rounded-xl font-mono font-semibold py-1">❌</button>
        </div>
    </div>
  )
}

export default ToDoList