import { useState } from "react";
import reactLogo from './assets/react.svg';  // 'reactlogo' -> 'reactLogo' for consistency
import viteLogo from '/vite.svg';             // Assuming Vite alias is set
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
        </>
    );
}

  