import Button  from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card'
import {Link, useNavigate } from 'react-router-dom';


const Service = ({service}) => {
    const {id, name, image, description, price} = service;
    // console.log(service);
    // const navigate = useNavigate();
    // const navigateToGetService = id =>{
    //     navigate(`/service/${id}`);
    // }
    
    
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="" src={image} />
                <Card.Body>
                    <Card.Title className="text-info">{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h3>{price}<span>$</span></h3>
                    {/* <Button onClick={() => navigateToGetService(id)} variant="primary">Get Service</Button> */}
                    <Link to="/chekout">
                    <Button className='btn btn-primary'>Proceed Checkout</Button>
                </Link>
                </Card.Body>
            </Card>
            

        </div>
    );
};

export default Service;