"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from '@/app/sidebar/page';
import Nav from '@/app/nav/page'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { fetchHotelgetid, fetchRoom, addAvailable, setRoomName, setHotelName, setEdate, setSdate } from "@/app/redux/roomslice";

export default function Page() {
    const { hotelname, roomname, sdate, edate, rooms, hotelidshow } = useSelector(
        (state) => state.RoomOperation
    );
    const dispatch = useDispatch();
    const router = useRouter();
    const [formErrors, setFormErrors] = useState({});
    const [selectedHotelId, setSelectedHotelId] = useState('');

    const validateForm = () => {
        const errors = {};

        if (!roomname) {
            errors.roomname = "Required.";
        }

        if (!hotelname) {
            errors.hotelname = "Required.";
        }

        if (!sdate) {
            errors.sdate = "Start Date Required.";
        }

        if (!edate) {
            errors.edate = "End Date required.";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    }

    useEffect(() => {
        dispatch(fetchHotelgetid());
        dispatch(fetchRoom());
    }, [dispatch])


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            hotelname: hotelname,
            roomname: roomname,
            sdate: sdate,
            edate, edate,
        };
        if (validateForm()) {
            dispatch(addAvailable(data));
            // console.log("valid");
            router.push('/available/showavailable', { scroll: false })
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
                                            <h5 className="mb-0">Add Date Availability</h5>
                                            {/* <small className="text-muted float-end">Default label</small> */}
                                        </div>
                                        <div className="card-body">
                                            {/* <form onSubmit={handleSubmit}> */}
                                            <div class="mb-3">
                                                <div class="form-group">
                                                    <label for="">Select Hotel</label>
                                                    <select
                                                        class="form-control"
                                                        name="hotelname"
                                                        onChange={(e) => {
                                                            dispatch(setHotelName(e.target.value));
                                                            setSelectedHotelId(e.target.value);
                                                        }}
                                                        value={hotelname}
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
                                                {formErrors.hotelname && <p style={{ color: "red" }}>{formErrors.hotelname}</p>}
                                            </div>
                                            <div class="mb-3">
                                                <div class="form-group">
                                                    <label for="">Select Room</label>
                                                    <select
                                                        class="form-control"
                                                        name="roomname"
                                                        onChange={(e) =>
                                                            dispatch(setRoomName(e.target.value))
                                                        }
                                                        value={roomname}
                                                    >
                                                        <option value="">Select Room</option>
                                                        {rooms && rooms.map((user) => (
                                                            <>
                                                                {
                                                                    selectedHotelId == user.hotel_id && (
                                                                        <option value={user.id}>{user.name}</option>
                                                                    )
                                                                }
                                                            </>
                                                            // <option value={user.id}>{user.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                {formErrors.roomname && <p style={{ color: "red" }}>{formErrors.roomname}</p>}
                                            </div>

                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    for="basic-icon-default-fullname"
                                                >
                                                    Start Date
                                                </label>
                                                <div className="input-group input-group-merge">
                                                    <input
                                                        type="date"
                                                        name="sdate"
                                                        className="form-control"
                                                        id="basic-icon-default-fullname"
                                                        placeholder=""
                                                        aria-label=""
                                                        min={new Date().toISOString().split("T")[0]}
                                                        aria-describedby="basic-icon-default-fullname2"
                                                        onChange={(e) =>
                                                            dispatch(setSdate(e.target.value))
                                                        }
                                                    />
                                                </div>
                                                {formErrors.sdate && <p style={{ color: "red" }}>{formErrors.sdate}</p>}
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    for="basic-icon-default-fullname"
                                                >
                                                    End Date
                                                </label>
                                                <div className="input-group input-group-merge">
                                                    <input
                                                        type="date"
                                                        name="edate"
                                                        className="form-control"
                                                        id="basic-icon-default-fullname"
                                                        min={new Date().toISOString().split("T")[0]}
                                                        placeholder=""
                                                        aria-label=""
                                                        aria-describedby="basic-icon-default-fullname2"
                                                        onChange={(e) =>
                                                            dispatch(setEdate(e.target.value))
                                                        }
                                                    />
                                                </div>
                                                {formErrors.edate && <p style={{ color: "red" }}>{formErrors.edate}</p>}
                                            </div>
                                            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

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
