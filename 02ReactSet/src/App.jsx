import { useState } from 'react';
import './App.css';

const Counter = () => {
    const [count, setCount] = useState(5);
    const increaseCount = () => setCount(count => count + 1);
    const decreaseCount = () => setCount(count => count - 1);
    const resetCount = () => setCount(0);
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
        <>
            <h1>Hello World with vite</h1>
            <Counter />
        </>
    );
}

export default App;
