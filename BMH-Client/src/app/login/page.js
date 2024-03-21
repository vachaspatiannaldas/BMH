"use client";

import React, { useState } from 'react';
import './style.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addlogin, setEmail, setPassword } from '../redux/loginslice';
export default function Page() {
    const { email, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const clearForm = () => {
    setFormData({
      email: '',
      password: '',
    });
    setErrorMessages({});
  };

  const validateField = (fieldName, value) => {
    let errors = { ...errorMessages };

    if (fieldName === 'email') {
      if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
        errors.email = 'Valid email address is required';
      } else {
        delete errors.email;
      }
    }

    if (fieldName === 'password') {
      if (!value) {
        errors.password = 'Password is required';
      } else {
        delete errors.password;
      }
    }

    setErrorMessages(errors);
  };

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
    validateField(fieldName, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['email', 'password'];
    const isAllFieldsFilled = requiredFields.every((field) => formData[field]);

    if (!isAllFieldsFilled) {
      // Show an alert message indicating that all fields are required.
      alert('All fields are required!!!');
      return; // Do not proceed with form submission.
    }

    // The rest of your form submission logic for valid data.
    const isFormValid = Object.keys(errorMessages).length === 0;

    if (isFormValid) {
      setIsLoading(true);

      const data = {
        email: formData.email,
        password: formData.password,
      };

      // try {
      //   await dispatch(addlogin(data));
      //   toast.success('Login Done'); // You can use toast for success message.
      //   clearForm();
      // } catch (error) {
      //   toast.error('Data could not be added'); // Use toast for error message.
      // } finally {
      //   setIsLoading(false);
      // }

      // try {
      //  dispatch(addlogin(data));

      //   if (response.token) {
      //     localStorage.setItem('token', response.token);
      //     console.log(response.token);

      //     toast.success('Login Done');
      //     clearForm();
      //   } else {
      //     toast.error('Token not found in the response');
      //   }
      // } catch (error) {
      //   toast.error('Data could not be added');
      // } finally {
      //   setIsLoading(false);
      // }

       dispatch(addlogin(data));
    }
  };
    return (
        <>
            {/* <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="style.css" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"
            /> */}
            <div className="container-fluid ps-md-0">
                <div className="row g-0">
                    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                    <h3 className="login-heading mb-4">Login</h3>

                    <input
                      type="text"
                      className={`form-control ${errorMessages.email ? 'is-invalid' : ''}`}
                      name="email"
                      id=""
                      aria-describedby="helpId"
                      placeholder="Enter Email-id"
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                    />
                    {errorMessages.email && <div className="invalid-feedback">{errorMessages.email}</div>}

                    <input
                      type="password"
                      className={`form-control mt-2 mb-2 ${errorMessages.password ? 'is-invalid' : ''}`}
                      name="password"
                      id=""
                      aria-describedby="helpId"
                      placeholder="Enter password"
                      onChange={(e) => handleFieldChange('password', e.target.value)}
                    />

                    {errorMessages.password && <div className="invalid-feedback">{errorMessages.password}</div>}
                    
                    {/* <span  style={{ fontSize: "15px" }}><a href="/register">Need an account?</a></span> */}

                    {/* <button
                      type="submit"
                      onClick={handleSubmit}
                      className={`btn btn-primary btn-sm float-right ${isLoading ? 'disabled' : ''}`}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Loading...' : 'Sign In'}
                    </button> */}

                    <div className="d-grid">
                                                <button
                                                    className={`btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2  ${isLoading ? 'disabled' : ''}`}
                                                    type="submit"
                                                    onClick={handleSubmit}
                                                    disabled={isLoading}
                                                >
                                                                          {isLoading ? 'Loading...' : 'Sign In'}

                                                </button>
                                                <div className="text-center">
                                                    <Link className="small" href="/register">
                                                        Don&apos;t Have An Account? Sign Up
                                                    </Link>
                                                </div>
                                            </div>
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
