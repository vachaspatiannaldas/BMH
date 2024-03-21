const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";

export const fetchVendor = createAsyncThunk('fetchVendor', async () => {
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.get('http://127.0.0.1:8000/api/vendor', config);
    return response.data;
});

export const addVendor = createAsyncThunk('addVendor', async (data) => {
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
    formData.append('email', data.email);
    formData.append('contact', data.contact);
    formData.append('location', data.location);
    formData.append('city', data.city);
    formData.append('password', data.password);
    formData.append('status', data.status);
    formData.append('profile', data.profile);
    const response = await axios.post('http://127.0.0.1:8000/api/vendor/', formData, config);
    return response.data;
});

export const vendorDelete = createAsyncThunk('vendorDelete', async (id) => {
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.delete(`http://127.0.0.1:8000/api/vendor/${id}`, config);
    return response.data;
});

export const VendorOperation = createSlice({
    name: 'VendorOperation',
    initialState: {
        name: '',
        email: '',
        contact: '',
        location: '',
        city: '',
        password: '',
        status: 'active',
        profile: '',
        vendors: []
    },
    reducers: {
        setName: (state, payload) => {
            state.name = payload.payload;
        },
        setEmail: (state, payload) => {
            state.email = payload.payload;
        },
        setContact: (state, payload) => {
            state.contact = payload.payload;
        },
        setLocation: (state, payload) => {
            state.location = payload.payload;
        },
        setCity: (state, payload) => {
            state.city = payload.payload;
        },
        setPassword: (state, payload) => {
            state.password = payload.payload;
        },
        setStatus: (state, payload) => {
            state.status = payload.payload;
        },
        setProfile: (state, payload) => {
            state.profile = payload.payload;
        },
    },
    extraReducers: {
        [fetchVendor.fulfilled]: (state, action) => {
            state.vendors = action.payload;
        },
        [addVendor.fulfilled]: () => {
            alert("Data added successfully");
        },
        [vendorDelete.fulfilled]: () => {
            alert("Data Deleted Successfully");
            window.location.href = "/vendor/vendorshow";
        },
    }
});

export const { setName, setCity, setContact, setEmail, setLocation, setPassword, setProfile, setStatus } = VendorOperation.actions;

export default VendorOperation.reducer;