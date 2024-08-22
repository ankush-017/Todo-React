import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

const initialState = {
    todos: initialTodos
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const { text, description } = action.payload; // Destructure the payload object
            const todo = {
                id: nanoid(),
                text: text,
                description: description || ''  //Set description or use an empty string as a default
            }
            state.todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(state.todos)); // Persist to localStorage
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todos)); // Persist to localStorage
        },
        updateTodo: (state, action) => {
            console.log('State before update:', state);
            console.log('Action payload:', action.payload);
        
            const { id, text, description } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
        
            if (existingTodo) {
                existingTodo.text = text;
                if (description !== undefined) {
                    existingTodo.description = description; // Update the description if provided
                }
            } else {
                console.error('Todo not found:', id);
            }
            localStorage.setItem("todos", JSON.stringify(state.todos)); // Persist to localStorage
        },
    }
})

// Exporting actions
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer