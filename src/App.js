import React from 'react';
import MatrixBackground from './matrixbackground.js';
import MatrixButton from './matrixbutton.js';
import './App.css'

const App = () => {
    return (
        <div className="App">
            <MatrixBackground />
            <div className="button-container">
                <MatrixButton />
            </div>
        </div>
    );
};

export default App;
