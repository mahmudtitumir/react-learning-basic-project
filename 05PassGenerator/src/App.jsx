import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [specialCharAllowed, setSpCharAllowed] = useState(false);
    const [password, setPassword] = useState('');

    const refPassword = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = '';
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (numAllowed) str += '0123456789';
        if (specialCharAllowed) str += '[{(<~`!@#$%^&*-_+=;:|,./?>)}]';
        for (let i = 1; i <= length; i++) {
            let randomChar = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(randomChar);
        }
        console.log(pass, str);
        setPassword(pass);
    }, [length, numAllowed, specialCharAllowed, setPassword]);

    const copyToClipboard = useCallback(() => {
        refPassword.current?.select();
        window.navigator.clipboard.writeText(password);
    }, [password]);

    useEffect(
        () => passwordGenerator(),
        [length, numAllowed, specialCharAllowed, passwordGenerator]
    );
    return (
        <>
            <section className="w-full h-full flex flex-col justify-center align-middle max-w-md mx-auto shadow-md rounded-lg p-4 my-16 text-white bg-indigo-500">
                <h1 className="text-xl text-center m-4">Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        placeholder="password"
                        className="w-full outline-none py-1 px-3 text-indigo-950"
                        readOnly
                        ref={refPassword}
                    />
                    <button
                        className="bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900"
                        onClick={copyToClipboard}
                    >
                        <svg
                            className="w-4"
                            role="graphics-symbol"
                            viewBox="0 0 14 16"
                        >
                            <path d="M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex tex-sm gap-x-2">
                    <div className="flex items-center gap-x-2">
                        <input
                            type="range"
                            min={8}
                            max={50}
                            id="range"
                            value={length}
                            className="cursor-pointer"
                            onChange={e => setLength(e.target.value)}
                        />
                        <label htmlFor="range">Size: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numAllowed}
                            id="numberInput"
                            onChange={() => setNumAllowed(prev => !prev)}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={specialCharAllowed}
                            id="charInput"
                            onChange={() => setSpCharAllowed(prev => !prev)}
                        />
                        <label htmlFor="charInput">S. Character</label>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
