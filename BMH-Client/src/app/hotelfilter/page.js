"use client"
import { useEffect, useState } from "react";
import Header from '../../Header/Page';
import Footer from '../../Footer/Page';
import { useDispatch, useSelector } from "react-redux"
import { fetchHotel, searchAddHotels, setEndSearchDate, setLocationSearch, setStartSearchDate } from "../redux/slice";
import Link from "next/link";
import Image from "next/image";
export default function Page() {
    const getMaxEndDate = () => {
        const today = new Date();
        const maxEndDate = new Date();
        maxEndDate.setMonth(today.getMonth() + 3); // Set max end date to 3 months from today
        return maxEndDate.toISOString().split('T')[0];
    };
    const {hotels,fetchsearchdata, slocation, sdate, edate} = useSelector((state) => state.HotelOperation)
    const [maxEndDate, setMaxEndDate] = useState(getMaxEndDate());

    const dispatch = useDispatch();  
    
    useEffect(()=>{
        dispatch(fetchHotel());
    },[dispatch])


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
        slocation: slocation,
        sdate: sdate,
        edate: edate
        };
        console.log(data);
        dispatch(searchAddHotels(data));
    };

    const truncateDescription = (description) => {
        const words = description.split(' ');
        const maxWords = 30; // Assuming an average of 5 words per line for 4 lines
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return description;
    };
    return (
        <>
            <Header />

            {/* Header Start */}
            <div className="container-fluid header bg-white p-0">                    
                    <div className="col-md-12 animated fadeIn">
                        <Image  layout="responsive" width={100} height={100}  className="img-fluid" src="/assets/img/back.jpg" alt="" />
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
                   {/* <div className="container">
                        <div className="row g-2">
                            <div className="col-md-10">
                                <div className="row g-2">
                                    <div className="col-md-4">
                                        <input
                                            type="text"
                                            className="form-control border-0 py-3"
                                            placeholder="Search..."
                                            value={searchLocation}
                                            onChange={(e) => setSearchLocation(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-dark border-0 w-100 py-3" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </div> */}

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
                                            min={sdate} // Sets the minimum date to the selected start date
                                            max={maxEndDate} // Set maximum date to 3 months from the start date
                                    onChange={(e) =>
                                        dispatch(setEndSearchDate(e.target.value))
                                      }
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
                                    <h1 className="mb-3">Hotels Listing</h1>
                             
                                </div>
                            </div>
                           
                        </div>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                {fetchsearchdata && fetchsearchdata.length > 0
                                ? fetchsearchdata.map((user) => {
                                    const imagesArray = JSON.parse(user.hotelimages);
                                    return (
                                    <div className="col-lg-10 col-md-6 wow fadeInUp mx-auto" data-wow-delay="0.1s"  key={user.hotelid} >
                                    <div className="property-item rounded overflow-hidden">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="container p-3 position-relative overflow-hidden">
                                          <Link href={'/hoteldescription/'+user.hotelid} >
                                            <Image  layout="responsive" width={100} height={100} 
                                                        className="img-fluid"
                                                        src={`http://localhost:8000/bookingagencies/${imagesArray[0]}`}
                                                        alt=""
                                                    />
                                           </Link>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                            {user.hotelsectorname}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">{user.city}</h5>
                                            <Link className="d-block h5 mb-2" href={'/hoteldescription/'+user.hotelid} >
                                            {user.hotelname}
                                            </Link>
                                            <p style={{textAlign:"justify"}}>  {truncateDescription(user.description)}</p>
                                            <p>
                                              <i className="fa fa-map-marker-alt text-primary me-2" />
                                                   {user.location.split(' ').slice(0, 5).join(' ')}
                                                 {/* {user.city} */}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  
                                    );
                                })
                                :hotels && hotels.map((user)=>{
                                    const imagesArray = JSON.parse(user.images);
                                    return (
                                    <div
                                        className="col-lg-3 wow fadeInUp"
                                        data-wow-delay="0.1s"
                                        key={user.hotelid} 
                                    >
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden hotelfilter">
                                                <a href="">
                                                    <Image  layout="responsive" width={100} height={100} 
                                                        className="img-fluid"
                                                        src={`http://localhost:8000/bookingagencies/${imagesArray[0]}`}
                                                        alt=""
                                                    />
                                                </a>
                                             
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                                    {user.sectorname}
                                                </div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                {/* <h5 className="text-primary mb-3">$12,345</h5> */}
                                                <Link className="d-block h5 mb-2" href={'/hoteldescription/'+user.hotelid}>
                                                    {user.hotelname}
                                                </Link>
                                                <p>
                                                    <i className="fa fa-map-marker-alt text-primary me-2" />
                                                    {user.location.split(' ').slice(0, 5).join(' ')},
                                                    {user.city}
                                                </p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    );
                                    })
                                    }
                                    
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
