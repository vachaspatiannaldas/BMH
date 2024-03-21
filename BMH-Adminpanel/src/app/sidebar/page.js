"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Page() {
  if (typeof sessionStorage !== "undefined") {
    const localUser = sessionStorage.getItem("username");
    if (localUser == null) {
      // Handle the case where 'username' is not found in sessionStorage
      window.location.href = "/";
    }
  } else {
    console.error("sessionStorage is not supported in this environment");
  }
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState("");
  // const localUser = sessionStorage.getItem('username');
  // // console.log(localUser);
  // if(localUser==null)
  // {
  //   window.location.href="/";
  // }
  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    let localStorageData = sessionStorage.getItem("userrole");
    setDataFromLocalStorage(localStorageData);
  }, []);

  return (
    <>
      {/* Menu */}
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <Link href="/dashboard" className="app-brand-link">
            {dataFromLocalStorage === "hotel_admin" && (
              <span className="app-brand-text demo menu-text fw-bolder ms-2">
                Hotel Admin
              </span>
            )}
            {dataFromLocalStorage === "admin" && (
              <span className="app-brand-text demo menu-text fw-bolder ms-2">
                Admin
              </span>
            )}
          </Link>
          <a
            href="javascript:void(0);"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle" />
          </a>
        </div>
        <div className="menu-inner-shadow" />
        <ul className="menu-inner py-1">
          {/* Dashboard */}
          <li className="menu-item active">
            <Link href="/dashboard" className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle" />
              <div data-i18n="Analytics">Dashboard</div>
            </Link>
          </li>
          {/* Layouts */}
          {/* <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-layout" />
              <div data-i18n="Layouts">Layouts</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="layouts-without-menu.html" className="menu-link">
                  <div data-i18n="Without menu">Without menu</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-without-navbar.html" className="menu-link">
                  <div data-i18n="Without navbar">Without navbar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-container.html" className="menu-link">
                  <div data-i18n="Container">Container</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-fluid.html" className="menu-link">
                  <div data-i18n="Fluid">Fluid</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-blank.html" className="menu-link">
                  <div data-i18n="Blank">Blank</div>
                </a>
              </li>
            </ul>
          </li> */}

          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Pages</span>
          </li>
          {dataFromLocalStorage === "admin" && (
            <>
              {/* <li className="menu-item">
                <Link href="/Category/categoryshow" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Category</div>
                </Link>

              </li> */}
              <li className="menu-item">
                <Link href="/vendor/vendorshow" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Vendor</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/hotel/hotelshow" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Hotel</div>
                </Link>
              </li>

              <li className="menu-item">
                <Link href="/room/roomshow" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Room</div>
                </Link>
              </li>

              <li className="menu-item">
                <Link href="/hoteladmin/showhoteladmin" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Hotel Admin</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  href="/hotelroombook/showhotelroombook"
                  className="menu-link "
                >
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Hotel Room Bookings</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/available/showavailable" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Available Dates</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/contact" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Contacts</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/margin/show" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Room Price</div>
                </Link>
              </li>
            </>
          )}
          {dataFromLocalStorage === "hotel_admin" && (
            <>
              <li className="menu-item">
                <Link href="/hotel/hotelshow" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Hotel</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/room/roomshow" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Room</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  href="/hotelsector/showhotelsector"
                  className="menu-link "
                >
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Hotel Sector</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  href="/hotelroombook/showhotelroombook"
                  className="menu-link "
                >
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Hotel Room Bookings</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/available/showavailable" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-dock-top" />
                  <div data-i18n="Account Settings">Available Dates</div>
                </Link>
              </li>
            </>
          )}
          {dataFromLocalStorage !== "admin" &&
            dataFromLocalStorage !== "hotel_admin" && <p>Error</p>}

          {/* <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-lock-open-alt" />
              <div data-i18n="Authentications">Authentications</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a
                  href="auth-login-basic.html"
                  className="menu-link"
                  target="_blank"
                >
                  <div data-i18n="Basic">Login</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="auth-register-basic.html"
                  className="menu-link"
                  target="_blank"
                >
                  <div data-i18n="Basic">Register</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="auth-forgot-password-basic.html"
                  className="menu-link"
                  target="_blank"
                >
                  <div data-i18n="Basic">Forgot Password</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-cube-alt" />
              <div data-i18n="Misc">Misc</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="pages-misc-error.html" className="menu-link">
                  <div data-i18n="Error">Error</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="pages-misc-under-maintenance.html"
                  className="menu-link"
                >
                  <div data-i18n="Under Maintenance">Under Maintenance</div>
                </a>
              </li>
            </ul>
          </li> */}
        </ul>
      </aside>
      {/* / Menu */}
    </>
  );
}
