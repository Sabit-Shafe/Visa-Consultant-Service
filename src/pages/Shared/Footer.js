import React from 'react';

const footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='text-center mt-5 bg-dark'>
                <p className='text-white'><small>copyright @ {year} </small></p>
            </footer>
        </div>
    );
};

export default footer;