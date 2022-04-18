import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';


const Chekout = () => {
    const [agree, setAgree] = useState(false);
    const initialValues = { username: '', email: '', mobileNo: '', address: '' };
    const [formValues] = useState(initialValues);
    // const { serviceID } = useParams();


    

    return (
        <div>
            <div className="container mx-auto w-50">
                <h1 className='text-center text-success'>CheckOut</h1>
                <Form >
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="yourname" value={formValues.username} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  type="email" placeholder="Enter email" value={formValues.email} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control  type="text" placeholder="" value={formValues.mobileNo} />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control  type="text" placeholder="" value={formValues.address} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept terms and condition" />
                    </Form.Group>
                    <Button
                        disabled={!agree}
                        type="submit"
                        value="Signup"
                        className="w-50 mx-auto d-block mb-5" variant="primary">
                        Sign up
                    </Button>
                </Form>

            </div>
        </div>
    );
};

export default Chekout;