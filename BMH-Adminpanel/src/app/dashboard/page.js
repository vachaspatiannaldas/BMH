'use client'

import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/page'
import Nav from '../nav/page'
export default function Page() {

  // useEffect(()=>{
  //   const localUser = JSON.parse(localStorage.getItem('username'))
  //   console.log(localUser)
  // },[])

  const [dataFromLocalStorage, setDataFromLocalStorage] = useState('');
  // const localUser = sessionStorage.getItem('username');
  // // console.log(localUser);
  // if(localUser==null)
  // {
  //   window.location.href="/";
  // }
  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    let localStorageData = sessionStorage.getItem('userrole');
    setDataFromLocalStorage(localStorageData);
  }, []);


  return (
    <>
      {/* Layout wrapper */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          {/* Layout container */}
          <div className="layout-page">
            <Nav />
            <div className="container mt-5">
              <div className="row mt-3">
                <div className="col-md-6 m-auto p-5 bg-white rounded-3 shadow">
                {dataFromLocalStorage === 'admin' && (
                  <h2 className='text-center'>Welcome Admin</h2>
                )} 
                {dataFromLocalStorage === 'hotel_admin' && (
                  <h2 className='text-center'>Welcome Hotel Admin</h2>
                )} 
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
