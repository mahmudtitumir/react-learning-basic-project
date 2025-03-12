import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [
        { id: 1, todo: 'Learn React', isComplete: false },
        { id: 2, todo: 'Learn Next.js', isComplete: false },
        { id: 3, todo: 'Build a project', isComplete: false },
    ],
    addTodo: todo => {
        // Add logic to use the 'todo' parameter
        console.log(todo);
    },
    removeTodo: id => {
        // Add logic to remove a todo by id
        console.log(`Removing todo with id: ${id}`);
    },
    updateTodo: (id, todo) => {
        // Add logic to update a todo by id
        console.log(`Updating todo with id: ${id}, new todo: ${todo}`);
    },
    toggleTodo: id => {
        // Add logic to toggle a todo's completion status by id
        console.log(`Toggling todo with id: ${id}`);
    },
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
};
