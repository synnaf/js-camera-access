import React, { useState, useEffect } from 'react';
import './App.scss'; 
import Camera from './components/camera/Camera'; 

function App() {
    // // Create the count state.  
    // const [count, setCount] = useState(0);

    // // Update the count (+1 every second).  
    // useEffect(() => {
    //     const timer = setTimeout(() => setCount(count + 1), 1000); return () => clearTimeout(timer);
    // }, [count, setCount]);
    // Return the App component.  
    return (
        <div className="App">
            <header className="App-header">
                <h1>Javascript Camera</h1>
                <Camera />
            </header>
        </div>
    );
} export default App;