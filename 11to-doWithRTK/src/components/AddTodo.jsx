import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';
import { useEffect } from 'react';

function AddTodo() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const editingTodo = useSelector(state => state.todos.editingTodo);
    useEffect(() => {
        if (editingTodo) {
            setInput(editingTodo.text);
        }
    }, [editingTodo]);
    const addTodoHandler = e => {
        e.preventDefault();
        if (!input) return;
        console.log(input, editingTodo);
        if (editingTodo) {
            dispatch(updateTodo({ id: editingTodo.id, text: input }));
        } else {
            dispatch(addTodo(input));
        }
        setInput('');
    };
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                {editingTodo ? 'Update' : 'Add'}
            </button>
        </form>
    );
}

export default AddTodo;
