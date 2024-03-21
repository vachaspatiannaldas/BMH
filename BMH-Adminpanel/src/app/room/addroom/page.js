"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation'
import { addRoom, fetchHotelgetid, fetchHotelsectorgetid, setDescription, setImages, setName, setStatus, setPrice, setRooms, setHotelid, setHotelsectorid } from "@/app/redux/roomslice";
export default function Page() {
  const { name, images, description, status, price, hotel_id, hotel_sector_id, total_rooms, hotelsectoridshow, hotelidshow } = useSelector(
    (state) => state.RoomOperation
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = "Room name is required.";
    } else {
      const stringPattern = /^[A-Za-z ]+$/;
      if (!stringPattern.test(name)) {
        errors.name = "Room name must contain only alphabetic characters.";
      } else if (name.length < 3) {
        errors.name = "Room name must be at least 3 characters.";
      }
    }

    if (!images) {
      errors.images = "Images is required.";
    }

    if (!description) {
      errors.description = "Description is required.";
    }

    if (!total_rooms) {
      errors.total_rooms = "Required.";
    }

    if (!hotel_id) {
      errors.hotel_id = "Description is required.";
    }

    if (!price) {
      errors.price = "Price is required.";
    } else {
      const stringPattern = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
      if (!stringPattern.test(price)) {
        errors.price = "Enter Number Only.";
      }
    }

    if (!status) {
      errors.status = "Selection Required.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  useEffect(() => {
    dispatch(fetchHotelgetid());
    dispatch(fetchHotelsectorgetid());
  }, [dispatch])


  // const handleImageChange = (value) => {
  //   const updatedImages = [...value];
  //   dispatch(setImages(updatedImages));
  // };

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
      status: status,
      price: price,
      hotel_id: hotel_id,
      total_rooms: total_rooms,
      // hotel_sector_id: hotel_sector_id,
    };
    if (validateForm()) {
      dispatch(addRoom(data));
      // console.log("valid");
      router.push('/room/roomshow', { scroll: false })
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
                      <h5 className="mb-0">Add Room</h5>
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
                            // onChange={(e)=>dispatch(setImages(e.target.files))}
                            onChange={(e) => handleImageChange(e.target.files)}
                          />
                        </div>
                        {formErrors.images && <p style={{ color: "red" }}>{formErrors.images}</p>}
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
                        {formErrors.status && <p style={{ color: "red" }}>{formErrors.status}</p>}
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> Price</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="number"
                            name="price"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setPrice(e.target.value))}
                          />
                        </div>
                        {formErrors.price && <p style={{ color: "red" }}>{formErrors.price}</p>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname">No.of Rooms</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="number"
                            name="total_rooms"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setRooms(e.target.value))}
                          />
                        </div>
                        {formErrors.total_rooms && <p style={{ color: "red" }}>{formErrors.total_rooms}</p>}
                      </div>

                      {/* <div class="mb-3">
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
                            <option value="" selected>Select Hotel Sector</option>
                            {
                              hotelsectoridshow.map((obj) => {
                                return (
                                  <option value={obj.id}>{obj.hotelsectorname}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                        {formErrors.hotel_sector_id && <p style={{ color: "red" }}>{formErrors.hotel_sector_id}</p>}
                      </div> */}

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
                            <option value="">Select Hotel</option>
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
