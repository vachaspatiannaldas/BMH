"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, marginDelete } from "@/app/redux/marginslice";
import { useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
export default function Page() {
    const { data } = useSelector((state) => state.PriceOperation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
                <div className="d-flex">
                  <h5 className="card-header"> Table</h5>
                  <Link href="/margin/add" className="mt-3">
                    <button className="btn btn-primary">Add</button>
                  </Link>
                </div>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>Hotel Name</th>
                        <th>Room Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Festival Name</th>
                        <th>Price</th>
                        <th>Margin Percentage</th>
                        <th>Total Price</th>
                        {/* <th>Hotel id</th>
            <th>Hotel Sector id</th> */}
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {data &&
                        data.map((d) => (
                          <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.hotel_id}</td>
                            <td>{d.room_id}</td>
                            <td>{d.start_date}</td>
                            <td>{d.end_date}</td>
                            <td>{d.festival_name}</td>
                            <td>{d.price}</td>
                            <td>{d.margin_percentage}</td>
                            <td>{d.total_price}</td>
                            {/* <td>{user.hotel_id}</td>
            <td>{user.hotel_sector_id}</td> */}
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
                                  <a
                                    class="dropdown-item"
                                    href="javascript:void(0);"
                                    onClick={() =>
                                      dispatch(marginDelete(d.id))
                                    }
                                  >
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
  );
}
