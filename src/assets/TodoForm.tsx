import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./feature/todoSlice";

const TodoForm = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(data));
    setData("");
  };

  return (
    <form onSubmit={handleFormSubmit} className='flex flex-col items-center mt-8 mb-20 max-w-screen-sm mx-auto'>
      <input
        onChange={(e) => setData(e.target.value)}
        value={data}
        type="text"
        placeholder="Enter a new ToDo..."
        className="border-2 border-gray-400 rounded-md px-4 py-2 mb-4 w-full text-xl font-bold shadow-lg focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="text-black hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded-xl shadow-lg transition-colors duration-300"
      >
        Add ToDo
      </button>
    </form>
  );
};

export default TodoForm;
