"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

export default function Page() {
    const handleLogout = ()=>{
        localStorage.clear();
        window.location.href="/login"
    }
    const [userData, setUserData] = useState("");

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user"));
        setUserData(localUser);
    }, []);
    return (
        <>
            {/* Spinner Start */}
            {/* <div
                    id="spinner"
                    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
                >
                    <div
                        className="spinner-border text-primary"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> */}
            {/* Spinner End */}
            {/* Navbar Start */}
            <div className="container-fluid nav-bar bg-transparent adeptnav">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                    <Link
                        href="/"
                        className="navbar-brand d-flex align-items-center text-center"
                    >
                       
                        <h1 className="m-0 text-primary">BMH</h1>
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link href="/" className="nav-item nav-link">
                                Home
                            </Link>
                     
                          
                     
                            <Link href="/hotelfilter" className="nav-item nav-link">
                                Hotels
                            </Link>
                            
                         
                            <Link href="/contact" className="nav-item nav-link">
                                Contact
                            </Link>
                            
                            <li className="nav-item dropdown">
                                    <a
                                        className="nav-link nav-icon-hover"
                                        href="javascript:void(0)"
                                        id="drop2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                                                            <i className="fa fa-user text-primary me-2" />

                                    </a>
                                    <div
                                        style={{ right: "-25px" }}
                                        className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                                        aria-labelledby="drop2"
                                    >
                                        <div className="message-body">
                                            {userData === null ? (
                                                <Link href="/login" className="btn btn-outline-primary mx-3 mt-2 d-block">Login</Link>
                                            ) : (<>
                                                {/* <Link href="/profile" className="d-flex align-items-center gap-2 dropdown-item">
                                                    <i className="ti ti-user fs-6" />
                                                    <p className="mb-0 fs-6">My Profile</p>
                                                </Link> */}
                                                <Link href="/booking" className="d-flex align-items-center gap-2 dropdown-item">
                                                    <i className="ti ti-user fs-6" />
                                                    <p className="mb-0 fs-6">My Bookings</p>
                                                </Link>
                                              
                                                
                                                <div className="justify-content-center mx-4">
                                                    <button
                                                        href="./authentication-login.html"
                                                        className="btn btn-outline-primary mx-3 mt-2 d-block"
                                                        onClick={handleLogout}
                                                    >
                                                        Logout
                                                    </button>
                                                </div>
                                            </>
                                            )}

                                        </div>
                                    </div>
                                </li>
                        </div>
                       
                    </div>
                </nav>
            </div>
            {/* Navbar End */}


        </>
    )
}
