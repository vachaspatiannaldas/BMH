"use client";
import React, { useState } from "react";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation'
import {
  addVendor,
  setCity,
  setContact,
  setEmail,
  setLocation,
  setName,
  setPassword,
  setProfile,
  setStatus
} from "@/app/redux/vendorslice";
export default function Page() {
  const { name, email, contact, location, city, password, status, profile } = useSelector(
    (state) => state.VendorOperation
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = "Vendor name is required.";
    } else {
      const stringPattern = /^[a-zA-Z ]*$/;
      if (!stringPattern.test(name)) {
        errors.name = "Vendor name must contain only alphabetic characters.";
      } else if (name.length < 3) {
        errors.name = "Vendor name must be at least 3 characters.";
      }
    }

    if (!location) {
      errors.location = "Location is required.";
    } else {
      const stringPattern = /^[A-Za-z]+$/;
      if (!stringPattern.test(location)) {
        errors.location = "Must contain only alphabetic characters.";
      }
    }

    if (!city) {
      errors.city = "City is required.";
    } else {
      const stringPattern = /^[A-Za-z]+$/;
      if (!stringPattern.test(city)) {
        errors.city = "Must contain only alphabetic characters.";
      }
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password atleast 6 characters.";
    }

    if (!profile) {
      errors.profile = "Profile is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else {
      const stringPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!stringPattern.test(email)) {
        errors.email = "Please enter a valid email address.";
      }
    }

    if (!contact) {
      errors.contact = "Contact no is required.";
    } else {
      const stringPattern = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
      if (!stringPattern.test(contact)) {
        errors.contact = "Enter Number Only.";
      } else if (contact.length != 10) {
        errors.contact = "Please enter valid  Mobile Number.";
      }
    }

    if (!status) {
      errors.status = "Selection Required.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      contact: contact,
      location: location,
      city: city,
      password: password,
      status: status,
      profile: profile,
    };

    if (validateForm()) {
      // console.log("validated");
      dispatch(addVendor(data));
      router.push('/vendor/vendorshow', { scroll: false })
    }
  };
  return (
    <>
      {/* Layout wrapper */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          {/* Layout container */}
          <div className="layout-page">
            <Nav />
            <div className="container mt-4">
              <div className="row">
                <div className="col-md-10 col-lg-6">
                  <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Add Vendor</h5>

                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname">Vendor Name</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setName(e.target.value))}
                          />
                        </div>
                        {formErrors.name && <p style={{ color: "red" }}>{formErrors.name}</p>}
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> Email</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                          />
                        </div>
                        {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> Contact</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="number"
                            name="contact"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setContact(e.target.value))}
                          />
                        </div>
                        {formErrors.contact && <p style={{ color: "red" }}>{formErrors.contact}</p>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> Location</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="text"
                            name="location"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setLocation(e.target.value))}
                          />
                        </div>
                        {formErrors.location && <p style={{ color: "red" }}>{formErrors.location}</p>}
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> City</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setCity(e.target.value))}
                          />
                        </div>
                        {formErrors.city && <p style={{ color: "red" }}>{formErrors.city}</p>}
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> Password</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setPassword(e.target.value))}
                          />
                        </div>
                        {formErrors.password && <p style={{ color: "red" }}>{formErrors.password}</p>}
                      </div>
                      <div class="mb-3">
                        <div class="form-group">
                          <label for="">Select Status</label>
                          <select
                            class="form-control"
                            name="status"
                            onChange={(e) =>
                              dispatch(setStatus(e.target.value))
                            }
                            value={status}
                          >
                            <option value="active" selected>Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> Profile</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="file"
                            name="profile"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setProfile(e.target.files[0]))}
                            accept="image/png, image/gif, image/jpeg, image/jpg, image/webp"
                          />
                        </div>
                        {formErrors.profile && <p style={{ color: "red" }}>{formErrors.profile}</p>}
                      </div>
                      {/* <Link href="/Category/categoryshow"> */}
                      <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                      {/* </Link> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* / Layout page */}
        </div>

        {/* Overlay */}
        <div className="layout-overlay layout-menu-toggle" />
      </div>
      {/* / Layout wrapper */}
    </>
  );
}
