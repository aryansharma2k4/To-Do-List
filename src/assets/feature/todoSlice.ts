import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Todo {
    id: string;
    text: string;
    toggleCompleted: boolean;
  }
  
  interface TodoState {
    todos: Todo[];
  }

const initialState = {
    todos : [{
        id: "",
        text: "",
        toggleCompleted : false
    }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo:(state, action) => {
            const todo:Todo = {
                id: nanoid(),
                text: action.payload,
                toggleCompleted: false,
            }
            if(todo.text){
                state.todos.push(todo)
            }
            
        },
        removeToDo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            console.log(state.todos);
            
        },
        finishedToDo : (state, action) => {
            state.todos.map((todo) => {
                if(todo.id === action.payload){
                    todo.toggleCompleted = !todo.toggleCompleted
                }
            })
        },
        editToDo : (state, action) => {
            const {id, name, toggleCompleted} = action.payload
            state.todos.map((todo) => {
                if(todo.id === id){
                    todo.text = name
                }
            })
        }
    }
})

export const {addTodo, removeToDo, finishedToDo, editToDo} = todoSlice.actions
export default todoSlice.reducer