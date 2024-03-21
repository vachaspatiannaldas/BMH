"use client"
import { useEffect, useState } from "react";
import Header from '../Header/Page';
import Footer from '../Footer/Page';
import { useDispatch, useSelector } from "react-redux"
import { fetchHotel, searchAddHotels, setEndSearchDate, setLocationSearch, setStartSearchDate  } from '@/app/redux/slice';
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Page() {
    const getMaxEndDate = () => {
        const today = new Date();
        const maxEndDate = new Date();
        maxEndDate.setMonth(today.getMonth() + 3); // Set max end date to 3 months from today
        return maxEndDate.toISOString().split('T')[0];
    };
    const {hotels, slocation, sdate, edate} = useSelector((state) => state.HotelOperation)
    const [maxEndDate, setMaxEndDate] = useState(getMaxEndDate());
    const dispatch = useDispatch();  
    // const localUser = JSON.parse(localStorage.getItem("user"));
    // if (localUser == null) {
    //     window.location.href = "/login";
    //   }
    useEffect(()=>{
        dispatch(fetchHotel());
    },[dispatch])
    const router = useRouter();

  

    const handleSubmit = (e) => {
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
    return (
        <>
            <Header />

            {/* Header Start */}
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 animated fadeIn mb-4">
                            Find A <span className="text-primary">Hotel Room</span> To Stay With
                            Your Family
                        </h1>
                        <p className="animated fadeIn mb-4 pb-2" style={{textAlign:"justify"}}>
                        Discover your perfect family getaway with our hotel booking service! We offer a wide selection of comfortable and family-friendly hotel rooms tailored to meet your needs. Whether you&apos;re looking for spacious suites, connecting rooms, or child-friendly amenities, we have you covered. Book now for a memorable and hassle-free stay for you and your loved ones!
                        </p>
                        <Link href="/hotelfilter" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
                            Get Started
                        </Link>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <Image className="img-fluid" src="/assets/img/carousel-1.jpg" alt="" layout="responsive" width={100} height={100} />
                    </div>
                </div>
            </div>
            {/* Header End */}

            <div className="container-xxl bg-white p-0">

                {/* Search Start */}
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
                                        <label style={{ color: 'white' }}>End Date</label>
                                        <input
                                            type="date"
                                            className="form-control border-0 py-3"
                                            placeholder="Search Keyword"
                                            min={sdate} // Set minimum date to the selected start date
                                            max={maxEndDate} // Set maximum date to 3 months from the start date
                                            onChange={(e) => dispatch(setEndSearchDate(e.target.value))}
                                            value={edate}
                                        />
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-md-2 mt-4">
                               <button className="btn btn-dark border-0 w-100 py-3" onClick={handleSubmit}>Search</button>
                            </div>
                        </div>
                    </div> 

                  
                </div>
            
                {/* Property List Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-0 gx-5 align-items-end">
                            <div className="col-lg-6">
                                <div
                                    className="text-start mx-auto mb-5 wow slideInLeft"
                                    data-wow-delay="0.1s"
                                >
                                    <h1 className="mb-3">Top Hotels</h1>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {hotels && hotels.slice(0,6).map((user)=>{
                                    const imagesArray = JSON.parse(user.images);
                                    return (
                                    <div
                                        className="col-lg-4 col-md-6 wow fadeInUp"
                                        data-wow-delay="0.1s"
                                        key={user.id} 
                                    >
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden hotelfilter">
                                                <a href="">
                                                    <Image
                                                        className="img-fluid"
                                                        src={`http://localhost:8000/bookingagencies/${imagesArray[0]}`}
                                                        alt=""
                                                        style={{height:"0px!important"}}
                                                        layout="responsive" width={100} height={100}
                                                    />
                                                </a>
                                            
                                            </div>
                                            <div className="p-4 pb-0">
                                                {/* <h5 className="text-primary mb-3">$12,345</h5> */}
                                                <Link className="d-block h5 mb-2" href={'/hoteldescription/'+user.hotelid}>
                                                    {user.hotelname}
                                                </Link>
                                                <p>
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    {user.location.split(' ').slice(0, 5).join(' ')} {user.city}
                                                </p>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    );
                                    })}
                                    <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                        <Link class="btn btn-primary py-3 px-5" href="/hotelfilter">Browse More Hotels</Link>
                                    </div>
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
