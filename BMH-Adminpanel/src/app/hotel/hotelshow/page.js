"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchHotel, hotelDelete } from "@/app/redux/hotelslice";
import { useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
export default function Page() {

  const { hotels } = useSelector((state) => state.HotelOperation)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotel());
  }, [dispatch])
  // console.log("category = ",categories);

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
              {/* Basic Bootstrap Table */}
              <div className="card">
                <div className='d-flex'>
                  <h5 className="card-header">Hotel Table</h5>
                  <Link href="/hotel/addhotel" className='mt-3'><button className='btn btn-primary'>Add Hotel</button></Link>
                </div>
                <div className="table-responsive w-auto text-nowrap">
                  <table className="table w-auto">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Vendor Name</th>
                        <th>Description</th>
                        <th>Images</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Pincode</th>
                        <th>Location</th>
                        <th>Hotel Sector</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {hotels &&
                        hotels.map((user) => (
                          //  myString = user.description;
                          //  substring = myString.substr(0, 5);

                          <tr key={user.id}>
                            <td>{user.hotelid}</td>
                            <td>{user.hotelname}</td>
                            <td>{user.vendorname}</td>
                            <td>{user.description}</td>
                            <td>{user.images}</td>
                            <td>{user.country}</td>
                            <td>{user.state}</td>
                            <td>{user.city}</td>
                            <td>{user.pincode}</td> 
                            <td>{user.location}</td>
                            <td>{user.sectorname}</td>
                            <td>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn p-0 dropdown-toggle hide-arrow"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="bx bx-dots-vertical-rounded" />
                                </button>
                                <div className="dropdown-menu">
                                  {/* <Link className="dropdown-item" href={`/Category/editcategory/${user.id}`}>
                    <i className="bx bx-edit-alt me-2" /> Edit
                  </Link> */}
                                  <a className="dropdown-item" href="javascript:void(0);" onClick={() => dispatch(hotelDelete(user.hotelid))}>
                                    <i className="bx bx-trash me-1"></i> Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>

                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/*/ Basic Bootstrap Table */}

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
