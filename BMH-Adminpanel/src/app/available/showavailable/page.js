"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchAvailable, availableDelete } from "@/app/redux/roomslice";
import { useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
export default function Availableshow() {
    
    const {available} = useSelector((state) => state.RoomOperation)
    const dispatch = useDispatch();  
    
    useEffect(()=>{
        dispatch(fetchAvailable());
    },[dispatch])

    return (
    <>
    {/* Layout wrapper */}
  <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
     <Sidebar/>
      {/* Layout container */}
      <div className="layout-page">
        <Nav/>
      <div className="container mt-4">
  {/* Basic Bootstrap Table */}
  <div className="card">
   <div className='d-flex'>
    <h5 className="card-header">Available Dates Table</h5>
    <Link href="/available/addavailable" className='mt-3'><button className='btn btn-primary'>Add Available Date</button></Link>
   </div>
    <div className="table-responsive text-nowrap">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Hotel Id</th>
            <th>Room Id</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-border-bottom-0">
        {available && available.map((user)=>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.hotelname}</td>
            <td>{user.roomname}</td>
            <td>{user.start_date}</td>
            <td>{user.end_date}</td>
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
                  <a class="dropdown-item" href="javascript:void(0);" onClick={() => dispatch(availableDelete(user.id))}>
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
