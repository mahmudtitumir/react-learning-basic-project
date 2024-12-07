import { useState } from 'react';
import './App.css';

function App() {
    const [color, setColor] = useState('white');
    const colorChange = e => {
        const color = e.target.value;
        setColor(color);
    };
    return (
        <>
            <div
                className="colorBtn"
                style={{
                    backgroundColor: color,
                }}
            >
                <button
                    onClick={colorChange}
                    value="red"
                    style={{ color: 'red' }}
                >
                    Red
                </button>
                <button
                    onClick={colorChange}
                    value="green"
                    style={{ color: 'green' }}
                >
                    Green
                </button>
                <button onClick={colorChange} value="blue">
                    Blue
                </button>
                <button onClick={colorChange} value="olive">
                    Olive
                </button>
                <button onClick={colorChange} value="grey">
                    Grey
                </button>
                <button onClick={colorChange} value="yellow">
                    Yellow
                </button>
            </div>
        </>
    );
}

export default App;
