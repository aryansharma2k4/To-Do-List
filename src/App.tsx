import './App.css';
import TodoForm from './assets/TodoForm';
import ToDoList from './assets/ToDoList';

function App() {

  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='mt-8 lg:mt-24 text-3xl font-bold underline font-mono text-center'>
        Todo-List
      </div>

      <div className='flex-1 px-2 lg:px-0'>
        <TodoForm />
        <ToDoList />
      </div>

      <div className='mt-8 flex bottom-0 fixed'>
        <a
          target='_blank'
          className='font-bold font-mono text-2xl mb-4 mr-4'
          href='https://www.linkedin.com/in/aryan-sharma-410a5b276/'
        >
          LinkedIn
        </a>
        <a
          target='_blank'
          className='font-bold font-mono text-2xl'
          href='https://github.com/aryansharma2k4'
        >
          GitHub
        </a>
      </div>
    </div>
  </>
  );
}

export default App;
