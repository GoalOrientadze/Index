import React from 'react';

const MatrixButton = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://example.com'; // URL to redirect
    };

    return (
        <button onClick={handleButtonClick} style={{ /* Matrix style */ }}>
            Join GOA, Become a Chad
        </button>
    );
};

export default MatrixButton;
