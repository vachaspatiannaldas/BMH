const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";

export const fetchHotel = createAsyncThunk('fetchHotel', async () => {
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.get('http://127.0.0.1:8000/api/hotel', config);
    return response.data;
});

export const hotelDelete = createAsyncThunk('hotelDelete', async (id) => {
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.delete(`http://127.0.0.1:8000/api/hotel/${id}`, config);
    return response.data;
});

export const fetchHotelsectorid = createAsyncThunk('fetchHotelsectorid', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/hotelsectorget');
    return response.data;
});

export const fetchVendor = createAsyncThunk('fetchVendor', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/vendorid');
    return response.data;
});

export const addHotel = createAsyncThunk('addHotel', async (data) => {
    // console.log(data);
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
    formData.append('description', data.description);
    formData.append('country', data.country);
    formData.append('state', data.state);
    formData.append('city', data.city);
    formData.append('pincode', data.pincode);
    formData.append('location', data.location);
    formData.append('hotel_sector_id', data.hotel_sector_id);
    formData.append('hotel_vendor_id', data.vendorId);

    data.images.forEach((image) => {
        formData.append('images[]', image); // Use array syntax to handle multiple files
    });


    const response = await axios.post('http://127.0.0.1:8000/api/hotel/', formData, config);
    return response.data;
});


export const HotelOperation = createSlice({
    name: 'HotelOperation',
    initialState: {
        name: '',
        description: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        location: '',
        hotel_sector_id: '',
        vendorId: '',
        images: [],
        hotels: [],
        hotelsectorshow: [],
        fetchVendors: [],
    },
    reducers: {
        setName: (state, payload) => {
            state.name = payload.payload;
        },
        setImages: (state, payload) => {
            state.images = payload.payload;
        },
        setDescription: (state, payload) => {
            state.description = payload.payload;
        },
        setCountry: (state, payload) => {
            state.country = payload.payload;
        },
        setState: (state, payload) => {
            state.state = payload.payload;
        },
        setCity: (state, payload) => {
            state.city = payload.payload;
        },
        setPincode: (state, payload) => {
            state.pincode = payload.payload;
        },
        setLocation: (state, payload) => {
            state.location = payload.payload;
        },
        setHotelsectorid: (state, payload) => {
            state.hotel_sector_id = payload.payload;
        },
        setVendorId: (state, payload) => {
            state.vendorId = payload.payload;
        }
    },
    extraReducers: {
        [fetchHotel.fulfilled]: (state, action) => {
            state.hotels = action.payload;
        },
        [fetchHotelsectorid.fulfilled]: (state, action) => {
            state.hotelsectorshow = action.payload;
        },
        [fetchVendor.fulfilled]: (state, action) => {
            state.fetchVendors = action.payload;
        },
        [addHotel.fulfilled]: () => {
            alert("Data added successfully");
        },
        [hotelDelete.fulfilled]: () => {
            alert("Data Deleted Successfully");
            window.location.href = "/hotel/hotelshow";
        },
    }
});

export const { setCity, setCountry, setDescription, setHotelsectorid, setImages, setVendorId, setLocation, setName, setPincode, setState } = HotelOperation.actions;

export default HotelOperation.reducer;