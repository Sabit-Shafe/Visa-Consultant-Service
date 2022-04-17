import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])


    return (
        <div className="">
            <div className="container">
                <h1 className="text-success text-center">My Consultency Types</h1>
                <div className="row">
                    {services.map(service => <Service
                    key = {service.id}
                    service = {service}
                    ></Service>)}
                </div>
            </div>
        </div>
    );
};

export default Services;