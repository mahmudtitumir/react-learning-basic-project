import { NavLink, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
    return (
        <>
            <nav>
                <NavLink to="/"> Home </NavLink>{' '}
                <NavLink to="/profile"> Profile </NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
}

export default App;
