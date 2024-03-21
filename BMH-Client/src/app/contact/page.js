"use client"
import React, {useState} from 'react'
import Header from '../../Header/Page';
import Footer from '../../Footer/Page';
import { useDispatch, useSelector } from "react-redux"
import { searchAddHotels, setEndSearchDate, setLocationSearch, setStartSearchDate  } from '@/app/redux/slice';
import { addContact, setEmail, setMessage, setName, setSubject } from '../redux/contactslice';
import { useRouter } from "next/navigation";
import Image from 'next/image';
export default function Page() {
    const getMaxEndDate = () => {
        const today = new Date();
        const maxEndDate = new Date();
        maxEndDate.setMonth(today.getMonth() + 3); // Set max end date to 3 months from today
        return maxEndDate.toISOString().split('T')[0];
    };
    const {slocation, sdate, edate} = useSelector((state) => state.HotelOperation)
    const {name, email, subject, message} = useSelector((state) => state.contact)
    const [maxEndDate, setMaxEndDate] = useState(getMaxEndDate());

    const dispatch = useDispatch();  
    const router = useRouter();

    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
      const errors = {};
      if (!name) {
        errors.name = "Name is required.";
      } else {
        const stringPattern = /^[A-Za-z ]+$/;
        if (!stringPattern.test(name)) {
          errors.name = "Name contains only alphabetic characters.";
        } 
      }
      if (!email) {
        errors.email = "Email is required.";
      } else {
        const stringPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!stringPattern.test(email)) {
          errors.email = "Please enter a valid email address.";
        }
      }
      if (!subject) {
        errors.subject = "Subject is required.";
      }
      if (!message) {
        errors.message = "Message is required.";
      }
      setFormErrors(errors);
      return Object.keys(errors).length === 0;
    }

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


   
    const handleSubmitContact = (e) => {
        e.preventDefault();
        const data = {
          name: name,
          email: email,
          subject: subject,
          message: message,
        };
          if (validateForm()) {
            dispatch(addContact(data));
            router.push('/', { scroll: false })
          }
      };

    return (
        <>
            <Header />
            {/* Header Start */}
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 animated fadeIn mb-4">Contact Us</h1>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <Image className="img-fluid" src="/assets/img/header.jpg" alt="" layout="responsive" width={100} height={100} />
                    </div>
                </div>
            </div>
            {/* Header End */}
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
                                    <label style={{color:"white"}}>End Date</label>
                                        <input
                                            type="date"
                                            className="form-control border-0 py-3"
                                            placeholder="Search Keyword"
                                            min={sdate}
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
            {/* Search End */}
            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="bg-light rounded p-3">
                                        <div
                                            className="d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                                        >
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-map-marker-alt text-primary" />
                                            </div>
                                            <span>India</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="bg-light rounded p-3">
                                        <div
                                            className="d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                                        >
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-envelope-open text-primary" />
                                            </div>
                                            <span>adept@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="bg-light rounded p-3">
                                        <div
                                            className="d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                                        >
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-phone-alt text-primary" />
                                            </div>
                                            <span>+91 7020270105</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <iframe
                                className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121637.5578859955!2d75.83938049070613!3d17.68925347858273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da64017f2cad%3A0x9696761cef43dc11!2sVertex%20Technosys!5e0!3m2!1sen!2sin!4v1699434100993!5m2!1sen!2sin"
                                frameBorder={0}
                                style={{ minHeight: 400, border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex={0}
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.5s">
                                {/* <p className="mb-4">
                                    The contact form is currently inactive. Get a functional and
                                    working contact form with Ajax &amp; PHP in a few minutes. Just
                                    copy and paste the files, add a little code and you're done.{" "}
                                    <a href="https://htmlcodex.com/contact-form">Download Now</a>.
                                </p> */}
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={name}
                                                    onChange={(e) =>
                                                        dispatch(setName(e.target.value))
                                                      }
                                                />
                                                <label htmlFor="name">Your Name</label>
                        {formErrors.name && <p style={{ color: "red" }}>{formErrors.name}</p>}

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Your Email"
                                                    value={email}
                                                    onChange={(e) =>
                                                        dispatch(setEmail(e.target.value))
                                                      }
                                                />
                                                <label htmlFor="email">Your Email</label>
                        {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}

                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    value={subject}
                                                    onChange={(e) =>
                                                        dispatch(setSubject(e.target.value))
                                                      }
                                                />
                                                <label htmlFor="subject">Subject</label>
                        {formErrors.subject && <p style={{ color: "red" }}>{formErrors.subject}</p>}

                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    name="message"
                                                    style={{ height: 150 }}
                                                    defaultValue={""}
                                                    value={message}
                                                    onChange={(e) =>
                                                        dispatch(setMessage(e.target.value))
                                                      }
                                                />
                                                <label htmlFor="message">Message</label>
                        {formErrors.message && <p style={{ color: "red" }}>{formErrors.message}</p>}

                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit" onClick={handleSubmitContact}>
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
            <Footer />
        </>

    )
}
