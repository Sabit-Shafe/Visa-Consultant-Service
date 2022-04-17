import Button  from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card'


const Service = ({service}) => {
    const {id, name, image, description, price} = service;
    // console.log(service);
    
    
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-info">{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h3>{price}<span>$</span></h3>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            

        </div>
    );
};

export default Service;