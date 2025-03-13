import './App.css';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

function App() {
    return (
        <>
            <h1 className="text-4xl text-indigo-950">To-Do Application</h1>
            <AddTodo />
            <TodoItem />
        </>
    );
}

export default App;
