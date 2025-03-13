import { createSlice, nanoid } from '@reduxjs/toolkit';

export const initialState = {
    todoList: [
        {
            id: '1',
            text: 'First todo',
            completed: true,
        },
    ],
    editingTodo: null,
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            };
            state.todoList.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter(
                todo => todo.id !== action.payload
            );
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todoList.find(item => item.id === id);
            if (todo) {
                todo.text = text;
            }
            state.editingTodo = null;
        },
        isCompleted: (state, action) => {
            const todo = state.todoList.find(
                todo => todo.id === action.payload
            );
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo: (state, action) => {
            state.editingTodo = action.payload;
        },
    },
});

export const { addTodo, removeTodo, updateTodo, isCompleted, editTodo } =
    todoSlice.actions;
export default todoSlice.reducer;
