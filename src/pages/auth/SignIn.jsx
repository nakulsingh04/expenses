import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './SignIn.css'; 
import SignUp from './SignUp';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="mt-5">
      <div className="text-center mb-4">
        <img 
          src="https://admin-wf.allheartweb.info/logo.png" 
          alt="Whois Data Center Logo" 
          className="mb-2" 
          style={{ width: '387px' }} 
        />
      </div>
      <Row className="justify-content-center flex">
        <SignUp/>
        {/* <Col md={5} className="p-4 shadow bg-white rounded" style={{ position: 'relative' }}>
          <h3 className="mb-4 text-center">Sign Up</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" autoComplete="off" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" autoComplete="off" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <InputGroup>
                <InputGroup.Text>+91</InputGroup.Text>
                <Form.Control type="text" name="phone" placeholder="99876 54321" autoComplete="off" required />
              </InputGroup>
            </Form.Group>

            <div className="d-flex justify-content-center my-4">
              <Button className=" btn-background btn btn-lg btn-primary" id="sign-up-form" >Sign up</Button>
            </div>
          </Form>
        </Col> */}

        <Col md={5} className="p-4 shadow bg-white rounded ms-md-5 mt-4 mt-md-0" style={{ position: 'relative' }}>
          <h3 className="mb-4 text-center">Sign In</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="signInEmail" placeholder="Enter your email" autoComplete="off" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="signInPassword"
                  placeholder="Enter your password"
                  autoComplete="new-password"
                  required
                />
                <InputGroup.Text onClick={togglePasswordVisibility} className="cursor-pointer">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRememberMe">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <div className="d-flex justify-content-end">
            <a href="#">Forgot your password?</a>
            </div>

            <div className="d-flex justify-content-center my-4">
              <Button className=" btn-background btn btn-lg btn-primary" id="sign-up-form" >Sign in</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
