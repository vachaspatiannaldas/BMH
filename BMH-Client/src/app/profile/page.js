"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Header from "../../Header/Page";

export default function Page() {
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/login"
    }
    const [userData, setUserData] = useState("");

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user"));
        setUserData(localUser);
    }, []);
    return (
        <>
            <Header />
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-4 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <i class="fas fa-user rounded-circle" style={{color: "#00b98e",fontSize: "100px",marginBottom: "15px"}}></i>
                            <span className="font-weight-bold">Edogaru</span>
                            <span className="text-black-50">edogaru@mail.com.my</span>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-8">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Edit Profile</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <label className="labels">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="first name"
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            {/* <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels">Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter phone number"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Address Line 1</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 1"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Address Line 2</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 2"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Postcode</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 2"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 2"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Area</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 2"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Email ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter email id"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Education</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="education"
                                        defaultValue=""
                                    />
                                </div>
                            </div> */}
                            {/* <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="labels">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="country"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">State/Region</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue=""
                                        placeholder="state"
                                    />
                                </div>
                            </div> */}
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button">
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
