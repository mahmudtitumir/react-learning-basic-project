import React from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { setData } = React.useContext(UserContext);
    const submitButton = e => {
        e.preventDefault();
        console.log('username:', username);
        setData({ username, password });
    };
    return (
        <div>
            <h1>Login Page</h1>
            <input
                className="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="text"
                placeholder="username"
            />
            <input
                className="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="password"
            />
            <button onClick={submitButton}>Login</button>
        </div>
    );
}

export default Login;
