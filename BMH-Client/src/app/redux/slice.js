const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";

export const fetchHotel = createAsyncThunk('fetchHotel', async()=>{
    const response = await axios.get('http://127.0.0.1:8000/api/hotelget');
    return response.data;
});

export const fetchBooking = createAsyncThunk('fetchBooking', async()=>{
    const response = await axios.get('http://127.0.0.1:8000/api/view_booking');
    return response.data;
});


// export const searchHotels = createAsyncThunk('searchHotels', async (searchTerm, { getState }) => {
//     const response = await axios.get(`http://127.0.0.1:8000/api/searchHotels?searchTerm=${searchTerm}`);
//     return response.data;
// });

// export const searchHotels = createAsyncThunk('searchHotels', async (searchTerm, { getState }) => {
//     const response = await axios.post(`http://127.0.0.1:8000/api/searchHotels?searchdata=${searchTerm}`);
//     return response.data;
// });

export const searchAddHotels = createAsyncThunk('searchAddHotels', async(data)=>{

    const formData = new FormData();
    formData.append('slocation',data.slocation);
    formData.append('sdate',data.sdate);
    formData.append('edate',data.edate);

    const response = await axios.post('http://127.0.0.1:8000/api/searchdata',formData);
    // console.log("data ::: ",response.data);
    return response.data;
});

export const hoteldetailsFetch = createAsyncThunk('hoteldetailsFetch', async(id)=>{
    // console.log("hoteldetailsFetch : ",id)
    const response = await axios.get(`http://127.0.0.1:8000/api/hotelgetroom/${id}`);
    // console.log("resonse : ",response.data)
    return response.data;

});

export const hotelRoomFetch = createAsyncThunk('hotelRoomFetch', async(id)=>{
    // console.log("hotelRoomFetch : ",id)
    const response = await axios.get(`http://127.0.0.1:8000/api/hotelrooms/${id}`);
    console.log("resonse : ",response.data)
    return response.data;

});

export const addRegister = createAsyncThunk('addRegister', async(data)=>{
    const { full_name, email, contact, password, confirm_password } = data;
    const formData = new FormData();
    formData.append('full_name',full_name);
    formData.append('email',email);
    formData.append('contact',contact);
    formData.append('password',password);
    formData.append('confirm_password',confirm_password);

    const response = await axios.post('http://127.0.0.1:8000/api/register',formData);
    // console.log(data);
    return response.data;
});

export const addBookRoom = createAsyncThunk('addBookRoom', async(data)=>{
    const { check_in, check_out, hotel_id, hotel_sector_id, room_id, price, noroomid, totalroom  } = data;

    const localUser = JSON.parse(localStorage.getItem("user"));

    const formData = new FormData();
    formData.append('user_id',localUser.id);
    formData.append('check_in',check_in);
    formData.append('check_out',check_out);
    formData.append('hotel_id',hotel_id);
    formData.append('hotel_sector_id',hotel_sector_id);
    formData.append('room_id',JSON.stringify(room_id));
    formData.append('price',price);
    formData.append('room_qty_id',noroomid);
    formData.append('room_qty',totalroom);
    
    // console.log(noroomid);
    // console.log(totalroom);
    axios.post('http://127.0.0.1:8000/api/booking', formData);
   
    return response.data;
});


export const HotelOperation = createSlice({
    name:'HotelOperation',
    initialState:{
        full_name:'',
        email:'',
        contact:'',
        password:'',
        confirm_password:'',
        user_id:'',
        check_in:'',
        check_out:'',
        total_rooms:'',
        slocation:'',
        sdate:'',
        edate:'',
        hotels:[],
        hoteldetails:[],
        roomdetails:[],
        fetchsearchdata:[],
        selectedRooms:0,
        roomtotal: 0,
        setroomid: 0,
        selectedRoomsDetails:[],
        availableRooms: [], // Store available rooms' details
        selectedRoomIds: [], // Store selected room IDs
        selectedRoomsArray:[],
        bookings:[],
        updatedrooms:0
    },
    reducers:{
        setFullName:(state,payload)=>{
            state.full_name=payload.payload;
        },
        setEmail:(state,payload)=>{
            state.email=payload.payload;
        },
        setContact:(state,payload)=>{
            state.contact=payload.payload;
        },
        setPassword:(state,payload)=>{
            state.password=payload.payload;
        },
        setConfirmPassword:(state,payload)=>{
            state.confirm_password=payload.payload;
        },
        setStartDate:(state,payload)=>{
            state.check_in=payload.payload;
        },
        setEndDate:(state,payload)=>{
            state.check_out=payload.payload;
        },
        setLocationSearch:(state,payload)=>{
            state.slocation=payload.payload;
        },
        setStartSearchDate:(state,payload)=>{
            state.sdate=payload.payload;
        },
        setEndSearchDate:(state,payload)=>{
            state.edate=payload.payload;
        },
        // setSelectedRooms:(state,payload)=>{
        //     state.selectedRooms=payload.payload;
        //     console.log("number of rooms == ",state.selectedRooms);
        //     console.log("room id  = ", state.setroomid);
        // },
        // setRoomId:(state,payload)=>{
        //     state.setroomid =payload.payload;
        // }
        setSelectedRooms: (state, payload) => {

            state.setroomid = payload.payload.roomId;
            state.selectedRooms = payload.payload.noOfRooms;
        },
        setRoomId: (state, payload) => {
            state.setroomid = payload.payload;
        },
        setAvailableRooms: (state, payload) => {
            state.availableRooms = payload.payload;
        },
        setSelectedRoomIds: (state, payload) => {
            state.selectedRoomIds = payload.payload;
        },
        // New reducer to store selected rooms along with details
        updateSelectedRooms: (state, payload) => {
            state.selectedRoomsDetails = payload.payload;
            // const selectedRoomsCount = state.selectedRooms;
            // state.selectedRoomsDetails = action.payload.slice(0, selectedRoomsCount);
        },
        setSelectedRoomDetails:(state, payload)=>{
            // state.selectedRoomsArray = [...state.selectedRoomsArray, {roomId:payload.payload.roomId, noOfRooms:payload.payload.noOfRooms}];

            let count = 0;

            let updatedRoomsArray = state.selectedRoomsArray && state.selectedRoomsArray.map((s)=>{
                if(s.roomId == payload.payload.roomId){
                    count++;
                    s.noOfRooms = payload.payload.noOfRooms;
                   
                }
                return s;
            });

            if(count==0){
                state.selectedRoomsArray = [...state.selectedRoomsArray,{roomId:payload.payload.roomId, noOfRooms:payload.payload.noOfRooms}];
            }

            else{
                state.selectedRoomsArray = updatedRoomsArray;
            }
        },
        removeItem:(state, payload)=>{
            state.selectedRoomsArray = payload.payload;
        }
    },
    extraReducers:{
        [fetchHotel.fulfilled]:(state,action)=>{
            state.hotels = action.payload;
        },
        [fetchBooking.fulfilled]:(state,action)=>{
            state.bookings = action.payload;
        },
        [hoteldetailsFetch.fulfilled]:(state, action)=>{
            state.hoteldetails = action.payload;
        },
        [hotelRoomFetch.fulfilled]:(state, action)=>{
            state.roomdetails = action.payload;
        },
        [addRegister.fulfilled]:()=>{
            alert("Registration successfully!!!") ;
            window.location.href="/login";
        },
        [addBookRoom.fulfilled]:()=>{
            // alert("Room Booked successfully") ;
            // window.location.href="/";
        },
        [searchAddHotels.fulfilled]:(state,payload)=>{
            state.fetchsearchdata = payload.payload;
        },
    }
});

export const {setConfirmPassword, setAvailableRooms, setSelectedRoomIds, setContact, setEmail, setFullName, setPassword, setEndDate, setStartDate, setEndSearchDate, setLocationSearch, setStartSearchDate, setSelectedRooms,  updateSelectedRooms, setSelectedRoomDetails, removeItem} = HotelOperation.actions;

export default HotelOperation.reducer;