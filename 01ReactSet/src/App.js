import './App.css';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount(count => count + 1);
    const decreaseCount = () => setCount(count => count - 1);
    const resetCount = () => setCount(count => 0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={decreaseCount}>-</button>
            <button onClick={resetCount}>reset</button>
            <button onClick={increaseCount}>+</button>
        </>
    );
};

function App() {
    return (
        <div className="App">
            <h1>Hello World with create-react-app</h1>
            <Counter />
        </div>
    );
}

export default App;
