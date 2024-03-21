"use client"
import { useEffect, useState } from "react";
import Sidebar from '@/app/sidebar/page'
import Nav from '@/app/nav/page'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'
import { addHoteladmin, fetchHotelid, fetchVendorid, setName, setContact, setEmail, setHotelid, setPassword, setVendorid } from '@/app/redux/hoteladminslice'
export default function Page() {

  const { name, hotelidshow, vendoridshow, hotel_id, vendor_id, contact, email, password } = useSelector((state) => state.HoteladminOperation);
  const dispatch = useDispatch();
  const router = useRouter();

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = "Vendor name is required.";
    } else {
      const stringPattern = /^[A-Za-z ]+$/;
      if (!stringPattern.test(name)) {
        errors.name = "Vendor name must contain only alphabetic characters.";
      } else if (name.length < 3) {
        errors.name = "Vendor name must be at least 3 characters.";
      }
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password atleast 6 characters.";
    }

    if (!hotel_id) {
      errors.hotel_id = "Hotel name is required.";
    }

    if (!vendor_id) {
      errors.vendor_id = "Vendor name is required.";
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

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  useEffect(() => {
    dispatch(fetchHotelid());
    dispatch(fetchVendorid());
  }, [dispatch])

  console.log("vendors -- ", vendoridshow);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      hotel_id: hotel_id,
      vendor_id: vendor_id,
      contact: contact,
      email: email,
      password: password,
    };
    if (validateForm()) {
      dispatch(addHoteladmin(data));
      router.push('/hoteladmin/showhoteladmin', { scroll: false })
    }
    // console.log("dat === ", data);
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
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Add Hotel Admin</h5>
                      {/* <small className="text-muted float-end">Default label</small> */}
                    </div>
                    <div className="card-body">
                      {/* <form onSubmit={handleSubmit}> */}
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname" >Name</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) =>
                              dispatch(setName(e.target.value))
                            }
                          />
                        </div>
                        {formErrors.name && <p style={{ color: "red" }}>{formErrors.name}</p>}
                      </div>

                      <div class="mb-3">
                        <div class="form-group">
                          <label for="">Select Hotel</label>
                          <select
                            class="form-control"
                            name="status"
                            onChange={(e) =>
                              dispatch(setHotelid(e.target.value))
                            }
                            value={hotel_id}
                          >
                            <option value="" selected>Select Hotel</option>
                            {
                              hotelidshow.map((obj) => {
                                return (
                                  <option value={obj.id} key="" >{obj.name}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                        {formErrors.hotel_id && <p style={{ color: "red" }}>{formErrors.hotel_id}</p>}
                      </div>

                      <div class="mb-3">
                        <div class="form-group">
                          <label for="">Select Vendor</label>
                          <select
                            class="form-control"
                            name="status"
                            onChange={(e) =>
                              dispatch(setVendorid(e.target.value))
                            }
                            value={vendor_id}
                          >
                            <option value="" selected>Select Vendor</option>
                            {
                              vendoridshow.map((obj) => {
                                return (
                                  <option value={obj.id} key="" >{obj.name}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                        {formErrors.vendor_id && <p style={{ color: "red" }}>{formErrors.vendor_id}</p>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname" >Contact</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="number"
                            name="contact"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) =>
                              dispatch(setContact(e.target.value))
                            }
                          />
                        </div>
                        {formErrors.contact && <p style={{ color: "red" }}>{formErrors.contact}</p>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname" >Email</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) =>
                              dispatch(setEmail(e.target.value))
                            }
                          />
                        </div>
                        {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname" >Password</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) =>
                              dispatch(setPassword(e.target.value))
                            }
                          />
                        </div>
                        {formErrors.password && <p style={{ color: "red" }}>{formErrors.password}</p>}
                      </div>

                      <Link href="/hotelsector/showhotelsector"><button className="btn btn-primary" onClick={handleSubmit}>Submit</button></Link>

                      {/* </form> */}
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
  )
}
