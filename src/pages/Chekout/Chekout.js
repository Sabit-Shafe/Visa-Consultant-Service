import React from 'react';
import { useParams } from 'react-router-dom';

const Chekout = () => {
    const {serviceID} = useParams();
    
    return (
        <div>
            <h1>CheckOut</h1>
            
        </div>
    );
};

export default Chekout;