"use client";
import React, { useEffect, useState } from "react";
import Header from '@/Header/Page';
import Footer from '@/Footer/Page';
import './style.css'
import './lightbox.min.css';
import './lightbox-plus-jquery.min';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux"
import Image from "next/image";
import { hoteldetailsFetch, hotelRoomFetch, setAvailableRooms, setSelectedRoomIds, setSelectedRooms, setStartDate, setEndDate, addBookRoom, setRoomId, searchAddHotels, setEndSearchDate, setLocationSearch, setStartSearchDate, updateSelectedRooms, setSelectedRoomDetails, removeItem } from '@/app/redux/slice';
import { useRouter } from "next/navigation";
export default function Page({params}) {
    console.log(params);
    const getMaxEndDate = () => {
        const today = new Date();
        const maxEndDate = new Date();
        maxEndDate.setMonth(today.getMonth() + 3); // Set max end date to 3 months from today
        return maxEndDate.toISOString().split('T')[0];
    };
    const {hoteldetails, availableRoomsData, setroomid, selectedRoomsDetails, selectedRoomIds, sdate, edate, roomdetails, selectedRooms, check_in, check_out, hotel_id, hotel_sector_id, room_id, price, slocation, selectedRoomsArray } = useSelector((state) => state.HotelOperation)
    const [maxEndDate, setMaxEndDate] = useState(getMaxEndDate());
    
    const dispatch = useDispatch();  
    
    const [hotelDetailsId, setHotelDetailsId] = useState('');
    const [hotelsectorId, setHotelSectorId] = useState('');
    const [roomId, setRoomId] = useState('');
    const [roomPrice, setRoomPrice] = useState('');

    const router = useRouter();
    let totalsum = 0;

    // useEffect(() => {
    //     // Update selected rooms details whenever selectedRooms or roomdetails change
    //     const rooms = roomdetails.slice(0, selectedRooms); // Get selected rooms based on selectedRooms count
    //     dispatch(updateSelectedRooms(rooms));
    // }, [selectedRooms, roomdetails, dispatch]);

    useEffect(()=>{
        dispatch(hoteldetailsFetch(params.description));
        dispatch(hotelRoomFetch(params.description));
    },[dispatch, params.description])

    useEffect(() => {
        if (hoteldetails && hoteldetails.length > 0) {
            const firstHotelDetailsId = hoteldetails[0].hotelid;
            const firstHotelSectorId = hoteldetails[0].sectorid;
            setHotelDetailsId(firstHotelDetailsId);
            setHotelSectorId(firstHotelSectorId);
        }
        if (roomdetails && roomdetails.length > 0) {
            const roomidget = roomdetails[0].roomid;
            const roompriceget = roomdetails[0].price;
            setRoomId(roomidget);
            setRoomPrice(roompriceget);
        }
    }, [hoteldetails, roomdetails]);

    console.log('room array:', selectedRoomsArray)
    console.log('rd:',roomdetails);

    const handleSubmit = (e) => {
        e.preventDefault();
        const localUser = JSON.parse(localStorage.getItem("user"));
        
        let roomArray = [];
       selectedRoomsArray && selectedRoomsArray.map((room)=>{

        {roomdetails && roomdetails.map((r)=>{

            if(room.roomId == r.id){
                const roomObject = {
                    id:r.id,
                    name:r.name,
                    price:r.price,
                    qty:room.noOfRooms
                }

                roomArray = [...roomArray, roomObject];
            }
        })}

        })

    if (localUser == null) {
        alert("Login to book room!!!");
        router.push('/login',{scroll: false});
      }else{
        const data = {
          check_in: sdate,
          check_out: edate,
          hotel_id: hotelDetailsId,
          hotel_sector_id: hotelsectorId,
          room_id: roomArray,
          price: totalsum,
          noroomid: roomArray.map(room => room.id).join(' '),
          totalroom: roomArray.map(room => room.qty).join(' ')
        };
        // console.log("room array id : ",roomArray.map(room => room.id).join(' '));
        // console.log("room array id : ",roomArray.map(room => room.qty).join(' '));
        console.log(data);
        dispatch(addBookRoom(data));
        alert("Room Booked successfully!!!") ;
        router.push('/booking',{scroll: false});
    }
      };

      function calculateDays(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDifference = Math.abs(end - start);
        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Number of milliseconds in a day: 1000ms * 60s * 60m * 24h
        return daysDifference;
      }
      

      const searchSubmit = (e) => {
        e.preventDefault();
        const data = {
        slocation: slocation,
        sdate: sdate,
        edate: edate
        };
        console.log(data);
        dispatch(searchAddHotels(data));
        router.push('/hotelfilter');
    };

    // const handleRoomSelectionChange = (id,value) => {
    //     // dispatch(setRoomId(parseInt(id)));

    //     const data = {roomId:id, noOfRooms:parseInt(value)}
    //    dispatch(setSelectedRoomDetails(data));
    //   };

    //   console.log("selected rooms ===:: ", selectedRoomsArray);

    //   const deleteRoomDetails = (id) =>{
    //     const rm = selectedRoomsArray.filter((x)=>x.roomId !== id);
    //     dispatch(removeItem(rm));
    //   }

    const handleRoomSelectionChange = (id, value) => {
        if (sdate) {
            const data = { roomId: id, noOfRooms: parseInt(value) };
            dispatch(setSelectedRoomDetails(data));
            console.log("selected rooms ===:: ", selectedRoomsArray);
        } else {
            alert("Please Select Dates...");
        }
    };
    
    const deleteRoomDetails = (id) => {
        if (sdate) {
            const rm = selectedRoomsArray.filter((x) => x.roomId !== id);
            dispatch(removeItem(rm));
            console.log("selected rooms after deletion ===:: ", rm);
        } else {
            alert("Please Select Dates...");
        }
    };
    
    return (
        <>
            <Header />
            {hoteldetails && hoteldetails.map((user)=>{
                const imagesArray = JSON.parse(user.images);
                console.log("imgarray",imagesArray);
                return(
<div key={user.hotelid}>
            <div className="container py-5">
                <div className="container">
                    
                    <div className="row g-5 align-items-center "  >
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" >
                            {/* <div className="about-img position-relative overflow-hidden p-5 pe-0"> */}
                            <Image layout="responsive" alt="" width={100} height={100} className="img-fluid w-100" src={`http://localhost:8000/bookingagencies/${imagesArray[0]}`} />
                            {/* </div> */}
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">{user.hotelname}</h1>
                            <p className="mb-4">
                                <i class="fas fa-map-marker-alt text-primary me-3"></i>
                               {user.location}, {user.city} - {user.pincode}, {user.state}, {user.country}
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3" />
                                Free WIFI
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3" />
                                Free Breakfast
                            </p>
                            {/* <a className="btn btn-primary py-3 px-5 mt-3" href="">
                                Read More
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div
                    className="container-fluid bg-primary mb-5 wow fadeIn"
                    data-wow-delay="0.1s"
                    style={{ padding: 35 }}
                >
            <div className="container">
                        <div className="row g-2">
                            <div className="col-md-10">
                                <div className="row g-2">
                                    <div className="col-md-4">
                                        <label style={{color:"white"}}>Location</label>
                                        <input
                                            type="text"
                                            className="form-control border-0 py-3"
                                            placeholder="Search Keyword"
                                            onChange={(e) =>
                                                dispatch(setLocationSearch(e.target.value))
                                              }
                                              value={slocation}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label style={{color:"white"}}>Start Date</label>
                                        <input
                                            type="date"
                                            className="form-control border-0 py-3"
                                            placeholder="Search Keyword"
                                    min={new Date().toISOString().split("T")[0]} // Sets the minimum date to the selected start date
                                    onChange={(e) =>{
                                        dispatch(setStartSearchDate(e.target.value));
                                        setMaxEndDate(getMaxEndDate());
                                    }
                                      }
                                      value={sdate}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                    <label style={{color:"white"}}>End Date</label>
                                        <input
                                            type="date"
                                            className="form-control border-0 py-3"
                                            placeholder="Search Keyword"
                                            min={sdate}
                                            max={maxEndDate} 
                                    onChange={(e) =>
                                        dispatch(setEndSearchDate(e.target.value))
                                      }
                                      value={edate}
                                        />
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-md-2 mt-4">
                               <button className="btn btn-dark border-0 w-100 py-3" onClick={searchSubmit}>Search</button>
                            </div>
                        </div>
                    </div> 
                    </div>
            <div className="container">
                <hr className='text-primary' />
                <div className="row">
                    {/* <div className="col-lg-3">
                        <h5>Ratings</h5>
                        <i class="fas fa-map-marker-alt text-primary me-3"></i>Wonderful Location
                    </div> */}
                    <div className="col-lg-9">
                        <p className='fs-3'>Description</p>
                        <p style={{textAlign:"justify"}}>{user.description}</p>
                    </div>
                </div>

                <div className="container">
                    <div className="row ">
                        <div className=" col-sm-7">
                    <ul className="people" style={{ display: 'flex', flexWrap: 'nowrap' }}>
                    {imagesArray.map((image, index) => (
                        <li key={index}>
                        <a href={`http://localhost:8000/bookingagencies/${image}`} data-lightbox="mygallery" data-title="caption here">
                            <Image layout="responsive" width={100} height={100}  src={`http://localhost:8000/bookingagencies/${image}`} className='img-fluid  m-2' alt="" />
                        </a>
                        </li>
                    ))}
                  
                    </ul>
                    </div>
                    </div>
                </div>
            </div>
</div>
                )})}
               
            <div className="container-fluid bg-white mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: 35 }}>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-8">
                            <p className='fs-3'>Available Rooms</p>
                            {roomdetails && roomdetails.map((user)=>{
                            const descriptionArray = JSON.parse(user.roomimages);
                            console.log("description images::",descriptionArray);
                            return(
                    <div key={user.roomid}>
                            <div className="row border">
                                <div className="col-lg-6 p-4">
                                    <h6>{user.roomname}</h6>

                                </div>

                            </div>

                            <div className="row border p-2 mb-4">
                                <div className="col-lg-6" style={{ borderRight: "1px solid" }}>
                                    <div className="row">
                          
                                    {descriptionArray.map((image, index) => {
                                    // if (index === 0) {
                                        return (
                                        <div className="col-lg-4" key={index}>
                                            <a href={`http://localhost:8000/bookingagencies/${image}`} data-lightbox="mygallery1" data-title="Hotel Rooms">
                                            <Image layout="responsive" width={100} height={100}  src={`http://localhost:8000/bookingagencies/${image}`} alt="" />
                                            </a>
                                        </div>
                                        );
                                    // }
                                    })}
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                   <strong><p>Rs. {user.price}</p></strong> 
                                   <strong>
                                    <div className="d-flex">
                                        <label>Number of Rooms:</label>
                                        <select
                                        className="form-select"
                                        style={{ width: "100px", marginLeft: "3px" }}
                                        // value={selectedRooms}
                                        onChange={(e) => handleRoomSelectionChange(user.id, e.target.value)}
                                        >
                                        {(() => {
                                            const options = [];
                                            for (let i = 1; i <= user.total_rooms; i++) {
                                            options.push(<option key={i} value={i}>{i}</option>);
                                            }
                                            return options;
                                        })()}
                                        </select>
                                      
                                    </div>
                                    </strong>
                                    <p style={{textAlign:"justify"}}>{user.roomdescription}</p>
                                   
                                </div>
                            </div>
                        </div>
                        )})}
                        
                  

                        </div> */}
<div className="col-lg-8">
    {roomdetails && roomdetails.length > 0 ? (
        <>
            <p className="fs-3">Available Rooms</p>
            {roomdetails.map((user) => {
                const descriptionArray = JSON.parse(user.roomimages);
                console.log("description images::", descriptionArray);
                return (
                    <div key={user.roomid}>
                        <div className="row border">
                            <div className="col-lg-6 p-4">
                                <h6>{user.roomname}</h6>
                            </div>
                        </div>

                        <div className="row border p-2 mb-4">
                            <div className="col-lg-6" style={{ borderRight: "1px solid" }}>
                                <div className="row">
                                    {descriptionArray.map((image, index) => {
                                        return (
                                            <div className="col-lg-4" key={index}>
                                                <a href={`http://localhost:8000/bookingagencies/${image}`} data-lightbox="mygallery1" data-title="Hotel Rooms">
                                                    <Image layout="responsive" width={100} height={100} src={`http://localhost:8000/bookingagencies/${image}`} alt="" />
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <strong><p>Rs. {user.price}</p></strong>
                                <strong>
                                    <div className="d-flex">
                                        <label>Number of Rooms:</label>
                                        <select
                                            className="form-select"
                                            style={{ width: "100px", marginLeft: "3px" }}
                                            onChange={(e) => handleRoomSelectionChange(user.id, e.target.value)}
                                        >
                                            {(() => {
                                                const options = [];
                                                for (let i = 1; i <= user.total_rooms; i++) {
                                                    options.push(<option key={i} value={i}>{i}</option>);
                                                }
                                                return options;
                                            })()}
                                        </select>
                                    </div>
                                </strong>
                                <p style={{ textAlign: "justify" }}>{user.roomdescription}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    ) : (
        <p className='fs-3 mx-1'>No rooms available</p>
    )}
</div>


                        <div className="col-lg-4 mt-3">
                            <p className='fs-3 mx-1'>My Selection</p>
     {sdate ? (
        <>
                            <div className="row border m-1 p-3 mb-0">
                                <div className="col-lg-12">
                                    <span>{sdate}</span>
                                    /
                                    <span>{edate}</span>


                                    <span className='float-end'>{calculateDays(sdate, edate)} days</span>

                                    {selectedRoomsArray && selectedRoomsArray.length > 0 && (
                                                
                                        
                                        selectedRoomsArray.map((room) => (
                                            
                                        <div className="row border m-1 p-3" key={room.roomId}>
                                            <div className="col-lg-12">
                                                
                                            <span>{room.noOfRooms} Rooms</span>

                                            {roomdetails && roomdetails.map((r)=>{
                                                if(room.roomId == r.id){
                                                    totalsum += (r.price * room.noOfRooms) * calculateDays(sdate, edate); // Calculate and accumulate totalsum
                                                    return <><h6>{r.name}</h6>
                                                    <div className="d-flex">
                                                    <p>Rs.{r.price * room.noOfRooms}</p>
                                                    <p style={{marginLeft:"2px", marginRight:"2px"}}> X </p>
                                                    <p>{calculateDays(sdate, edate)}days</p>
                                                    <p style={{marginLeft:"2px", marginRight:"2px"}}> = </p>
                                                    <p>Rs.{(r.price * room.noOfRooms) * calculateDays(sdate, edate)}</p>
                                                    </div>
                                                   {/* <button className="btn btn-danger" >X</button> */}
                                                   <i className="fa fa-trash text-primary me-2" onClick={()=>deleteRoomDetails(room.roomId)} />

                                                    </>
                                                }
                                            })}

                                            {/* <span>Room ID: {room.roomId}</span> */}

                                            </div>
                                        </div>
                                        ))
                                    )}
                                </div>
                                <strong className="mt-2"><p>Total: {totalsum}</p></strong>

                                <button type="button" class="btn btn-primary py-2 px-3" onClick={handleSubmit}>Book Now</button>
                            </div>
                          
    </>                 
    ) : (
                            <div className="row border m-1 p-3 mt-0">
                                <div className="col-lg-12">
                                    <h6 className='mb-3'>Choose your room</h6>
                                    <p><i className="fa fa-check text-primary me-3" />Instant Confirmation</p>
                                    <p><i className="fa fa-check text-primary me-3" />No Booking Fees</p>
                                    <p><i className="fa fa-check text-primary me-3" />Booking only takes 2 minutes</p>
                                    <p><Image layout="responsive" width={100} height={100} src="/assets/img/payment.png" style={{width:"200px"}} alt=""/></p>
                                </div>
                            </div>
    )}
                        </div>
                    </div>
                </div>
            </div>
                <Footer />
        </>
    )
}

