"use client";
import './style.css';
import React, {useState} from 'react'
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-number-input/style.css';
import 'react-phone-input-2/lib/material.css';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { addRegister, setConfirmPassword, setContact, setEmail, setPassword, setFullName } from '@/app/redux/slice';


export default function Page() {

    const { full_name, email, password, confirm_password, contact } = useSelector((state) => state.HotelOperation);
    const dispatch = useDispatch();

      
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        password: '',
        confirm_password: '',
        contact: '',
      });
      const [errorMessages, setErrorMessages] = useState({});
      const [isLoading, setIsLoading] = useState(false);
    
      const clearForm = () => {
        setFormData({
          full_name: '',
          email: '',
          password: '',
          confirm_password: '',
          contact: '',
        });
        setErrorMessages({});
      };
    
      const validateField = (fieldName, value) => {
        let errors = { ...errorMessages };
    
    
        if (fieldName === 'full_name') {
          if (!value) {
            errors.full_name = 'Name is required';
          } else if (!/^[A-Za-z ]+$/.test(value)) {
            errors.full_name = 'Name should contain only letters';
          } else {
            delete errors.full_name;
          }
        }
    
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
    
        if (fieldName === 'confirm_password') {
          if (value !== formData.password) {
            errors.confirm_password = 'Passwords do not match';
          } else {
            delete errors.confirm_password;
          }
        }
    
        if (fieldName === 'contact') {
          if (!value || !/^(\+[0-9]{1,4})?[0-9]{10}$/.test(value)) {
            errors.contact = 'Valid 10-digit contact number is required';
          } else {
            delete errors.contact;
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
    
        const requiredFields = ['full_name', 'email', 'password', 'confirm_password', 'contact'];
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
            full_name: formData.full_name,
            email: formData.email,
            password: formData.password,
            confirm_password: formData.confirm_password,
            contact: formData.contact,
          };
          try {
            await dispatch(addRegister(data));
           // alert('Data added'); // You can also use alert here for success message.
            clearForm();
          } catch (error) {
            alert('Data could not be added'); // You can also use alert here for error message.
          } finally {
            setIsLoading(false);
          }
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
                                    <h3 className="login-heading mb-4">Register</h3>
        <div className='px-4'>
          <input
            type='text'
            className={`form-control mb-2 ${errorMessages.full_name ? 'is-invalid' : ''}`}
            name='full_name'
            id=''
            aria-describedby='helpId'
            placeholder='Full Name'
            value={formData.full_name}
            onChange={(e) => handleFieldChange('full_name', e.target.value)}
          />
          {errorMessages.full_name && <div className='invalid-feedback'>{errorMessages.full_name}</div>}

          <input
            type='text'
            className={`form-control mb-2 ${errorMessages.email ? 'is-invalid' : ''}`}
            name='email'
            id=''
            aria-describedby='helpId'
            placeholder='Email'
            value={formData.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
          {errorMessages.email && <div className='invalid-feedback'>{errorMessages.email}</div>}

          <input
            type='password'
            className={`form-control mb-2 ${errorMessages.password ? 'is-invalid' : ''}`}
            name='password'
            id=''
            aria-describedby='helpId'
            placeholder='Password'
            value={formData.password}
            onChange={(e) => handleFieldChange('password', e.target.value)}
          />
          {errorMessages.password && <div className='invalid-feedback'>{errorMessages.password}</div>}

          <input
            type='password'
            className={`form-control mb-2 ${errorMessages.confirm_password ? 'is-invalid' : ''}`}
            name='confirm_password'
            id=''
            aria-describedby='helpId'
            placeholder='Retype password'
            value={formData.confirm_password}
            onChange={(e) => handleFieldChange('confirm_password', e.target.value)}
          />
          {errorMessages.confirm_password && <div className='invalid-feedback'>{errorMessages.confirm_password}</div>}

          <input
            type='text'
            className={`form-control my-2 ${errorMessages.contact ? 'is-invalid' : ''}`}
            name='contact'
            id=''
            aria-describedby='helpId'
            placeholder='Contact'
            value={formData.contact}
            onChange={(e) => handleFieldChange('contact', e.target.value)}
          />
          {errorMessages.contact && <div className='invalid-feedback'>{errorMessages.contact}</div>}
          {/* <span style={{ fontSize: "15px" }}><a href="/login">Login  an account?</a></span> */}


          {/* <PhoneInput
          country={'in'}
          placeholder="Contact No"
          name="contact"
          value={formData.contact}
          inputProps={{
            className: `form-control ${errorMessages.contact ? 'is-invalid' : ''}`,
          }}
          onChange={(value) => handleFieldChange('contact', value)}
        />
        {errorMessages.contact && <div className='invalid-feedback'>{errorMessages.contact}</div>} */}


          {/* <button
            type='submit'
            onClick={handleSubmit}
            className={`btn btn-primary btn-sm float-right ${isLoading ? 'disabled' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Sign Up'}
          </button> */}
          <div className="d-grid">
                                                <button
                                                    className={`btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 ${isLoading ? 'disabled' : ''}`}
                                                    type="submit" onClick={handleSubmit}
                                                  disabled={isLoading}
                                                >
                                                               {isLoading ? 'Loading...' : 'Sign Up'}
                                                </button>
                                                <div className="text-center">
                                                    <Link className="small" href="/login">
                                                       Have An Account? Sign In
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
            </div>
        </>

    )
}
