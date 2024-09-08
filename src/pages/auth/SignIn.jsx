import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../../assets/css/styles.css';
import { Header } from './Header';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const FormControl = ({ type, name, placeholder, register, required = false }) => (
  <Form.Control
    type={type}
    name={name}
    placeholder={placeholder}
    {...register(name, { required })}
  />
);

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
  const { register: registerSignUp, handleSubmit: handleSubmitSignUp, formState: { errors: errorsSignUp } } = useForm();
  const { register: registerSignIn, handleSubmit: handleSubmitSignIn, formState: { errors: errorsSignIn } } = useForm();

  const onSignUpSubmit = async (data) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${apiUrl}/api/user`, data);
      if (response?.data?.token) {
        localStorage.setItem('token', response.data.token);
      }
      console.log('Sign Up Response:', response.data.token);
    } catch (error) {
      console.error('Sign Up Error:', error.response ? error.response.data : error.message);
    }
  };

  const onSignInSubmit = (data) => {
    console.log('Sign In Data:', data);
  };

  return (
    <Container className="mt-5">
      <Header />
      <Row className="justify-content-center">
        {/* Sign Up Form */}
        <Col md={5} className="p-4 shadow bg-white rounded mx-5" style={{ position: 'relative' }}>
          <h3 className="mb-4 text-center">Sign Up</h3>
          <Form onSubmit={handleSubmitSignUp(onSignUpSubmit)}>
            <Form.Group className="mb-3" controlId="formSignUpName">
              <Form.Label>Name</Form.Label>
              <FormControl 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                register={registerSignUp} 
                required 
              />
              {errorsSignUp.name && <p className="text-danger">Name is required</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSignUpEmail">
              <Form.Label>Email</Form.Label>
              <FormControl 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                register={registerSignUp} 
                required 
              />
              {errorsSignUp.email && <p className="text-danger">Email is required</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSignUpPhone">
              <Form.Label>Phone</Form.Label>
              <InputGroup>
                <InputGroup.Text>+91</InputGroup.Text>
                <FormControl 
                  type="number" 
                  name="phone" 
                  placeholder="99876 54321" 
                  register={registerSignUp} 
                  required 
                />
              </InputGroup>
              {errorsSignUp.phone && <p className="text-danger">Phone is required</p>}
            </Form.Group>

            <div className="btn d-flex justify-content-center my-4">
              <Button className="btn-background btn btn-lg btn-primary" type="submit">Sign Up</Button>
            </div>
          </Form>
        </Col>

        {/* Sign In Form */}
        <Col md={5} className="p-4 shadow bg-white rounded mx-2 mt-4 mt-md-0" style={{ position: 'relative' }}>
          <h3 className="mb-4 text-center">Sign In</h3>
          <Form onSubmit={handleSubmitSignIn(onSignInSubmit)}>
            <Form.Group className="mb-3" controlId="formSignInEmail">
              <Form.Label>Email</Form.Label>
              <FormControl
                type="email"
                name="email"
                placeholder="Enter your email"
                register={registerSignIn}
                required
              />
              {errorsSignIn.email && <p className="text-danger">Email is required</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSignInPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <FormControl
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  register={registerSignIn}
                  required
                />

                <InputGroup.Text onClick={togglePasswordVisibility} className="cursor-pointer">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup>
              {errorsSignIn.password && <p className="text-danger">Password is required</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRememberMe">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <a href="#">Forgot your password?</a>
            </div>

            <div className="btn d-flex justify-content-center my-4">
              <Button className="btn-background btn btn-lg btn-primary" type="submit">Sign In</Button>
            </div>
          </Form>
        </Col>
      </Row>
      <div className="d-flex justify-content-end mt-4">
        <div className="text-center mb-5">Login to
          <a href="#">Old Dashboard</a>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
