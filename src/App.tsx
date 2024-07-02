import './App.css'
import TodoForm from './assets/TodoForm'
import ToDoList from './assets/ToDoList'

function App() {
  return (
    <>
    <div className=''>
      <div className='mt-24 text-3xl font-bold underline font-mono'>Todo List(Using React and Typescript)</div>
      <div className='flex mt-12 justify-center'>
        <div className='mr-12 text-xl font-semibold font-mono'>All
          <div className='border-black border-[1px]'></div>
        </div>
        <div className='mr-12 text-xl font-semibold font-mono' >Active
          <div className='border-black border-[1px]'></div>
        </div>
        <div className='text-xl font-semibold font-mono'>Completed
          <div className='border-[1px] border-black'></div>
        </div>
      
      </div>
      <TodoForm />
      <ToDoList />
    </div>
    </>
  )
}

export default App
