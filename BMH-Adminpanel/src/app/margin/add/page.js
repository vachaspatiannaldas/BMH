"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  addMargin,
  fetchHotelgetid,
  fetchRoom,
  setEndDate,
  setFestivalName,
  setHotelid,
  setMarginPercentage,
  setPrice,
  setRoomid,
  setStartDate,
  setTotalPrice,
} from "@/app/redux/marginslice";
export default function Page() {
  const {
    hotel_id,
    room_id,
    start_date,
    end_date,
    festival_name,
    price,
    margin_percentage,
    total_price,
    hotelidshow,
    rooms,
  } = useSelector((state) => state.PriceOperation);
  const dispatch = useDispatch();
  const router = useRouter();
  const [formErrors, setFormErrors] = useState({});
  const [selectedHotelId, setSelectedHotelId] = useState("");
  const [roomprice, setRoomPrice] = useState("");
  useEffect(() => {
    dispatch(fetchHotelgetid());
    dispatch(fetchRoom());
  }, [dispatch]);
  console.log("Rooms State:", rooms); // Log the rooms state
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      hotel_id: hotel_id,
      room_id: room_id,
      start_date: start_date,
      end_date: end_date,
      festival_name: festival_name,
      price: roomprice,
      margin_percentage: margin_percentage,
      total_price: total_price,
    };
    dispatch(addMargin(data));
    router.push('/margin/show')
  };

  const calculateTotalPrice = (marginPercentage, roomPrice) => {
    const margin = (parseFloat(marginPercentage) / 100) * parseFloat(roomPrice);
    const totalPrice = parseFloat(roomPrice) + margin;
    dispatch(setTotalPrice(totalPrice));
  };
  
  console.log("room price :: ",roomprice);
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
                      <div class="mb-3">
                        <div class="form-group">
                          <label for="">Select Hotel</label>
                          <select
                            class="form-control"
                            name="hotel_id"
                            onChange={(e) => {
                              dispatch(setHotelid(e.target.value));
                              setSelectedHotelId(e.target.value);
                            }}
                            value={hotel_id}
                          >
                            <option value="">Select Hotel</option>
                            {hotelidshow.map((obj) => {
                              return (
                                <option value={obj.id} key="">
                                  {obj.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        {/* {formErrors.hotel_id && <p style={{ color: "red" }}>{formErrors.hotel_id}</p>} */}
                      </div>

 
<div className="mb-3">
  <div className="form-group">
    <label htmlFor="">Select Room</label>
    <select
  className="form-control"
  name="room_id"
  onChange={(e) => {
    console.log("e.target.value type:", typeof e.target.value);
    const selectedRoom = rooms.find((room) => room.id === parseInt(e.target.value, 10));
    console.log("selectedRoom:", selectedRoom);
    setRoomPrice(selectedRoom ? selectedRoom.price : "");
    console.log("Selected Room id:", e.target.value);
    console.log("All Room IDs:", rooms.map(room => room.id));
    console.log("price selected :", selectedRoom ? selectedRoom.price : "N/A");
    dispatch(setRoomid(e.target.value));
  }}
  
  value={room_id}
>
  <option value="">Select Room</option>
  {rooms &&
    rooms.map((user) => (
      selectedHotelId === user.hotel_id && (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      )
    ))}
</select>
  </div>
  {/* {formErrors.roomname && <p style={{ color: "red" }}>{formErrors.roomname}</p>} */}
</div>
                      <div className="mb-3">
                        <label for="">Start Date</label>
                        <div className="input-group input-group-merge">
                          <input
                            type="date"
                            name="start_date"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            min={new Date().toISOString().split("T")[0]}
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) =>
                              dispatch(setStartDate(e.target.value))
                            }
                          />
                        </div>
                        {/* {formErrors.sdate && (
                          <p style={{ color: "red" }}>{formErrors.sdate}</p>
                        )} */}
                      </div>
                      <div className="mb-3">
                      <label for="">
                          End Date
                        </label>
                        <div className="input-group input-group-merge">
                          <input
                            type="date"
                            name="end_date"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            min={new Date().toISOString().split("T")[0]}
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) =>
                              dispatch(setEndDate(e.target.value))
                            }
                          />
                        </div>
                        {/* {formErrors.edate && (
                          <p style={{ color: "red" }}>{formErrors.edate}</p>
                        )} */}
                      </div>

                      <div className="mb-3">
                      <label for="">
                          Festival Name
                        </label>
                        <div className="input-group input-group-merge">
                          <input
                            type="text"
                            name="festival_name"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) =>
                              dispatch(setFestivalName(e.target.value))
                            }
                          />
                        </div>
                        {/* {formErrors.edate && (
                          <p style={{ color: "red" }}>{formErrors.edate}</p>
                        )} */}
                      </div>

                      <div className="mb-3">
  <label htmlFor="">Price</label>
  <div className="input-group input-group-merge">
  <input
  type="number"
  name="price"
  className="form-control"
  id="basic-icon-default-fullname"
  placeholder=""
  aria-label=""
  value={roomprice}
  aria-describedby="basic-icon-default-fullname2"
  onChange={(e) => dispatch(setPrice(e.target.value))}
/>
  </div>
  {/* {formErrors.edate && (
    <p style={{ color: "red" }}>{formErrors.edate}</p>
  )} */}
</div>
                      <div className="mb-3">
                      <label for="">
                          Margin in Percentage
                        </label>
                        <div className="input-group input-group-merge">
                          <input
                            type="number"
                            name="margin_percentage"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => {
                              dispatch(setMarginPercentage(e.target.value));
                              calculateTotalPrice(e.target.value, roomprice);
                            }}
                          />
                        </div>
                        {/* {formErrors.edate && (
                          <p style={{ color: "red" }}>{formErrors.edate}</p>
                        )} */}
                      </div>
                      <div className="mb-3">
                      <label for="">
                          Total Price
                        </label>
                        <div className="input-group input-group-merge">
                          {total_price}
                        </div>
                        {/* {formErrors.edate && (
                          <p style={{ color: "red" }}>{formErrors.edate}</p>
                        )} */}
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
