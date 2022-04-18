import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const emailRef = useRef('');
    const passRef = useRef('');
    const nameRef= useRef('');

    const navigate = useNavigate();
    const navigateLogin = ()=>{
        navigate('/login');
    }
    const handleSignup = (event) => {
        event.preventDefault();
    }

    return (
            <div className="container mx-auto w-25">
                <h1>Please Login</h1>
                <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>Already have an account? Please <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Register</Link> </p>
            </div>
            );
};

            export default Signup;