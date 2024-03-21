import { configureStore } from "@reduxjs/toolkit";
import  HotelOperation  from "./slice";
import  login  from "./loginslice";
import  contact  from "./contactslice";
export const store = configureStore({
    reducer : {HotelOperation:HotelOperation, login:login, contact:contact},
    // middleware:getDefaultMiddleware=>getDefaultMiddleware({
    //     serializableCheck:false,
    // })
})