"use client"
import { useDispatch, useSelector } from "react-redux"
import { getContact } from "@/app/redux/slice";
import { useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
export default function Page() {
    const {contact} = useSelector((state) => state.CategoryOperation)
    const dispatch = useDispatch();  
    useEffect(()=>{
        dispatch(getContact());
    },[dispatch])
    // console.log("category = ",categories);
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
    <h5 className="card-header">Contact Table</h5>
   </div>
    <div className="table-responsive text-nowrap">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody className="table-border-bottom-0">
        {contact && contact.map((user)=>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.subject}</td>
            <td>{user.message}</td>           
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
