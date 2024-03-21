"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation'
import { addHotel, fetchHotelsectorid, fetchVendor, setCity, setCountry, setDescription, setHotelsectorid, setVendorId, setImages, setLocation, setName, setPincode, setState } from "@/app/redux/hotelslice";
export default function Page() {
  const { name, images, description, country, state, location, city, pincode, hotel_sector_id, vendorId, hotelsectorshow, fetchVendors } = useSelector(
    (state) => state.HotelOperation
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = "Hotel name is required.";
    } else {
      const stringPattern = /^[a-zA-Z ]*$/;
      if (!stringPattern.test(name)) {
        errors.name = "Hotel name must contain only alphabetic characters.";
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

    if (!country) {
      errors.country = "Country is required.";
    } else {
      const stringPattern = /^[A-Za-z]+$/;
      if (!stringPattern.test(country)) {
        errors.country = "Must contain only alphabetic characters.";
      }
    }

    if (!state) {
      errors.state = "State is required.";
    } else {
      const stringPattern = /^[A-Za-z]+$/;
      if (!stringPattern.test(state)) {
        errors.state = "Must contain only alphabetic characters.";
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

    if (!images) {
      errors.images = "Images is required.";
    }

    if (!hotel_sector_id) {
      errors.hotel_sector_id = "Selection required.";
    }
    if (!vendorId) {
      errors.vendorId = "Selection required.";
    }

    if (!description) {
      errors.description = "Description is required.";
    }

    if (!pincode) {
      errors.pincode = "Pincode is required.";
    } else {
      const stringPattern = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
      if (!stringPattern.test(pincode)) {
        errors.pincode = "Please enter valid pincode.";
      } else if (pincode.length != 6) {
        errors.pincode = "Please enter valid pincode.";
    }
  }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  useEffect(() => {
    dispatch(fetchHotelsectorid());
    dispatch(fetchVendor());
  }, [dispatch]);

  const handleImageChange = (files) => {
    const fileList = Array.from(files);
    dispatch(setImages(fileList));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      images: images,
      description: description,
      country: country,
      state: state,
      location: location,
      city: city,
      pincode: pincode,
      hotel_sector_id: hotel_sector_id,
      vendorId: vendorId,
    };
    if (validateForm()) {
      dispatch(addHotel(data));
      router.push('/hotel/hotelshow', { scroll: false })
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
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Add Hotel</h5>
                      {/* <small className="text-muted float-end">
                        Default label
                      </small> */}
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname">Name</label>
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
                        <label className="form-label" for="basic-icon-default-fullname"> Description</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <textarea
                            rows="5"
                            cols="5"
                            name="description"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setDescription(e.target.value))}
                          ></textarea>
                        </div>
                        {formErrors.description && <p style={{ color: "red" }}>{formErrors.description}</p>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-email">Images</label>
                        <div className="input-group input-group-merge">
                          <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                          <input
                            type="file"
                            name="images"
                            accept="images/*"
                            id="basic-icon-default-email"
                            className="form-control"
                            multiple
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-email2"
                            onChange={(e) => handleImageChange(e.target.files)}
                          />
                        </div>
                        {formErrors.images && <p style={{ color: "red" }}>{formErrors.images}</p>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> Country</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="text"
                            name="country"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setCountry(e.target.value))}
                          />
                        </div>
                        {formErrors.country && <p style={{ color: "red" }}>{formErrors.country}</p>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> State</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="text"
                            name="state"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setState(e.target.value))}
                          />
                        </div>
                        {formErrors.state && <p style={{ color: "red" }}>{formErrors.state}</p>}
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
                        <label className="form-label" for="basic-icon-default-fullname"> Pincode</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="number"
                            name="pincode"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setPincode(e.target.value))}
                          />
                        </div>
                        {formErrors.pincode && <p style={{ color: "red" }}>{formErrors.pincode}</p>}
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

                      <div class="mb-3">
                        <div class="form-group">
                          <label for="">Select Hotel Sector</label>
                          <select
                            class="form-control"
                            name="status"
                            onChange={(e) =>
                              dispatch(setHotelsectorid(e.target.value))
                            }
                            value={hotel_sector_id}

                          >
                            <option value="" selected>Select Sector</option>
                            {
                              hotelsectorshow.map((obj) => {
                                return (
                                  <option value={obj.id} key="" selected>{obj.name}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                        {formErrors.hotel_sector_id && <p style={{ color: "red" }}>{formErrors.hotel_sector_id}</p>}
                      </div>

                      <div class="mb-3">
                        <div class="form-group">
                          <label for="">Select Vendor</label>
                          <select
                            class="form-control"
                            name="status"
                            onChange={(e) =>
                              dispatch(setVendorId(e.target.value))
                            }
                            value={vendorId}

                          >
                            <option value="" selected>Select Vendor</option>
                            {
                              fetchVendors.map((obj) => {
                                return (
                                  <option value={obj.id} key="" selected>{obj.name}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                        {formErrors.vendorId && <p style={{ color: "red" }}>{formErrors.vendorId}</p>}
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
