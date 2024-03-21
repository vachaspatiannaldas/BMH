"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategory, categoryDelete,categoryEditFetch } from "@/app/redux/slice";
import { useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
export default function Page() {
    const {categories} = useSelector((state) => state.CategoryOperation)
    const dispatch = useDispatch();  
    useEffect(()=>{
        dispatch(fetchCategory());
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
    <h5 className="card-header">Category Table</h5>
    <Link href="/Category/addcategory" className='mt-3'><button className='btn btn-primary'>Add Category</button></Link>
   </div>
    <div className="table-responsive text-nowrap">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-border-bottom-0">
        {categories && categories.map((user)=>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.status}</td>
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
                
                  <a class="dropdown-item" href="javascript:void(0);" onClick={() => dispatch(categoryDelete(user.id))}>
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
