import './App.css'
import TodoForm from './assets/TodoForm'
import ToDoList from './assets/ToDoList'

function App() {
  return (
    <>
    <div className=''>
      <div className='mt-24 text-3xl font-bold underline font-mono'>Todo List(Using React and Typescript)</div>
      
      <TodoForm />
      <ToDoList />
    </div>
    </>
  )
}

export default App
