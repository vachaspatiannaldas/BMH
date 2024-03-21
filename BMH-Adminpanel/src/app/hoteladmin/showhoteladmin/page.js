"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchHoteladmin, hotelAdminDelete } from "@/app/redux/hoteladminslice";
import { useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
export default function Page() {
  const { hoteladmin } = useSelector((state) => state.HoteladminOperation)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHoteladmin());
  }, [dispatch])
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
                  <h5 className="card-header">Hotel Admin Table</h5>
                  <Link href="/hoteladmin/addhoteladmin" className='mt-3'><button className='btn btn-primary'>Add Hotel Admin</button></Link>
                </div>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Hotel Name</th>
                        <th>Vendor Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {hoteladmin && hoteladmin.map((user) => (
                        <tr key={user.id}>
                          <td>{user.hoteladminid}</td>
                          <td>{user.hoteladminname}</td>
                          <td>{user.hotelname}</td>
                          <td>{user.vendorname}</td>
                          <td>{user.contact}</td>
                          <td>{user.email}</td>
                          <td>{user.password}</td>
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
                                {/* <Link className="dropdown-item" href="/Category/editcategory" onClick={() =>dispatch(categoryEditFetch(user.id))}>
                    <i className="bx bx-edit-alt me-2" /> Edit
                  </Link> */}
                                <a class="dropdown-item" href="javascript:void(0);" onClick={() => dispatch(hotelAdminDelete(user.hoteladminid))}>
                                  <i class="bx bx-trash me-1"></i> Delete
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
