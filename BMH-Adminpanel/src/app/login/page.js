"use client"
import React from 'react'
// import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addLogin, setPassword, setEmail } from '@/app/redux/loginslice';
// import { signUpSchema } from './schema';
export default function Page() {

    const { password, email } = useSelector((state) => state.AdminLoginOperation);
    const dispatch = useDispatch();

    // const initialValues = {
    //     name: "",
    //     status: "",
    //     // email: "",
    //     // mobile: '',
    //     // password: "",
    //     // confirmpassword: "",
    //   };
    const handleSubmit = () => {
        // e.preventDefault();
        const data = {
            email: email,
            password: password,
        };
        dispatch(addLogin(data));
    };


    return (
        <>
            <div className="container-xxl col-lg-4">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner">
                        {/* Register */}
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mb-2 text-center">Login</h4>
                                <p className="mb-4">
                                    Please sign-in to your account and start the adventure
                                </p>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email-username"
                                        placeholder="Enter your email"
                                        autofocus=""
                                        onChange={(e) => dispatch(setEmail(e.target.value))}
                                    />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <div className="d-flex justify-content-between">
                                        <label className="form-label" htmlFor="password">
                                            Password
                                        </label>
                                    </div>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="············"
                                            aria-describedby="password"
                                            
                                            onChange={(e) => dispatch(setPassword(e.target.value))}
                                        />
                                        <span className="input-group-text cursor-pointer">
                                            <i className="bx bx-hide" />
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button type="button" className="btn btn-primary d-grid w-100" onClick={handleSubmit}>
                                        Sign in
                                    </button>
                                </div>

                                {/* <p className="text-center">
                                    <span>New on our platform?</span>
                                    <a href="auth-register-basic.html">
                                        <span>Create an account</span>
                                    </a>
                                </p> */}
                            </div>
                        </div>
                        {/* /Register */}
                    </div>
                </div>
            </div>

        </>
    )
}
