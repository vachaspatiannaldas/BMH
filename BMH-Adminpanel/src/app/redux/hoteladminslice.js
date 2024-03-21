const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";

export const fetchHoteladmin = createAsyncThunk('fetchHoteladmin', async () => {
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.get('http://127.0.0.1:8000/api/hotel_admin', config);
    return response.data;
});

export const fetchHotelid = createAsyncThunk('fetchHotelid', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/hotelid');
    console.log("hotel response", response.data);
    return response.data;
});

export const fetchVendorid = createAsyncThunk('fetchVendorid', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/vendorid');
    return response.data;
});

export const hotelAdminDelete = createAsyncThunk('hotelAdminDelete', async (id) => {
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.delete(`http://127.0.0.1:8000/api/hotel_admin/${id}`, config);
    return response.data;
});

export const addHoteladmin = createAsyncThunk('addHoteladmin', async (data) => {
    //console.log(data);
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('hotel_id', data.hotel_id);
    formData.append('vendor_id', data.vendor_id);
    formData.append('contact', data.contact);
    formData.append('email', data.email);
    formData.append('password', data.password);


    const response = await axios.post('http://127.0.0.1:8000/api/hotel_admin/', formData, config);
    return response.data;
});


export const HoteladminOperation = createSlice({
    name: 'HoteladminOperation',
    initialState: {
        name: '',
        hotel_id: '',
        vendor_id: '',
        contact: '',
        email: '',
        password: '',
        hotelidshow: [],
        vendoridshow: [],
        hoteladmin: [],
    },
    reducers: {
        setName: (state, payload) => {
            state.name = payload.payload;
        },
        setHotelid: (state, payload) => {
            state.hotel_id = payload.payload;
        },
        setVendorid: (state, payload) => {
            state.vendor_id = payload.payload;
        },
        setContact: (state, payload) => {
            state.contact = payload.payload;
        },
        setEmail: (state, payload) => {
            state.email = payload.payload;
        },
        setPassword: (state, payload) => {
            state.password = payload.payload;
        },
    },
    extraReducers: {
        [fetchHoteladmin.fulfilled]: (state, action) => {
            state.hoteladmin = action.payload;
        },
        [fetchHotelid.fulfilled]: (state, action) => {
            state.hotelidshow = action.payload;
        },
        [fetchVendorid.fulfilled]: (state, action) => {
            state.vendoridshow = action.payload;
            console.log("data == ", state.vendoridshow);
        },
        [addHoteladmin.fulfilled]: () => {
            alert("Data Added successfully");
        },
        [hotelAdminDelete.fulfilled]: () => {
            alert("Data Deleted Successfully");
            window.location.href = "/hoteladmin/showhoteladmin";
        }
    }
});

export const { setContact, setEmail, setHotelid, setName, setPassword, setVendorid } = HoteladminOperation.actions;

export default HoteladminOperation.reducer;