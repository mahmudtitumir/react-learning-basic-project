import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import About from './components/about/About.jsx';
import User from './components/user/User.jsx';
import Github from './components/github/Github.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'user/:userId',
                element: <User />,
            },
            {
                path: '/github/:username',
                element: <Github />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
