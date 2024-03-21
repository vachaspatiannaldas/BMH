"use client"
import React, { useState, useEffect } from 'react';
import { fetchBooking } from '../redux/slice';
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Header/Page";
import Footer from '@/Footer/Page';
export default function Page() {
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/login";
    }
    const [userData, setUserData] = useState("");
    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user"));
        setUserData(localUser);
    }, []);

    const {bookings} = useSelector((state) => state.HotelOperation);
    const dispatch = useDispatch();  
    useEffect(()=>{
        dispatch(fetchBooking());
    },[dispatch]);
    let totalprice = 0;
    return (
        <>
               <Header />
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12 border-right">
                                <h4 style={{textAlign:'center',display:"block", margin:"10px"}}>My Bookings</h4>
                        <div className="col-md-12 ">
                            
                            {bookings &&
                                bookings.map((user) => {
                                    const roomData = JSON.parse(user.room_id);
                                    return roomData.map((room, index) => (
                                        <div className="col-sm-6 mx-auto d-flex justify-content-center m-1" key={index}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="card-text">Hotel Name: {user.hotelname}</p>
                                                    <p className="card-text">Room Name: {room.name}</p>
                                                    <p className="card-text">Price: {room.price}</p>
                                                    <p className="card-text">Number of rooms: {room.qty}</p>
                                                    <p className="card-text">Start Date: {user.check_in}</p>
                                                    <p className="card-text">End Date: {user.check_out}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ));
                                })}
                        </div>

                               {bookings &&
                                    bookings.map((user) => {
                                        totalprice += parseInt(user.price)
                                        // return (
                                        //     <div className="col-sm-6 mx-auto d-flex justify-content-center mt-3 mb-3" key={user.id}>
                                        //         <div className="card">
                                        //             <div className="card-body">
                                        //                 <strong className="card-text">Subtotal Price: {user.price}</strong>
                                        //             </div>
                                        //         </div>
                                        //     </div>
                                        // );
                                    })
                                }
                                <div className="col-sm-6 mx-auto d-flex justify-content-center mt-3 mb-3" >
                                                <div className="card">
                                                    <div className="card-body">
                                                        <strong className="card-text">Total Price: {totalprice}</strong>
                                                    </div>
                                                </div>
                                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
