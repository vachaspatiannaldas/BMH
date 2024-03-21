const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

import axios from "axios";


export const fetchHotelsector = createAsyncThunk('fetchHotelsector', async () => {
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.get('http://127.0.0.1:8000/api/hotel_sector', config);
    return response.data;
});

export const addHotelsector = createAsyncThunk('addHotelsector', async (data) => {

    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const { name, status } = data;


    const formData = new FormData();
    formData.append('name', name);
    formData.append('status', status);

    const response = await axios.post('http://127.0.0.1:8000/api/hotel_sector', formData, config);

    return response.data;
});

export const hotelsectorDelete = createAsyncThunk('hotelsectorDelete', async (id) => {
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.delete(`http://127.0.0.1:8000/api/hotel_sector/${id}`, config);
    return response.data;
});



export const HotelsectorOperation = createSlice({
    name: 'HotelsectorOperation',
    initialState: {
        name: '',
        status: 'active',
        hotelsectors: []
    },
    reducers: {
        setName: (state, payload) => {
            state.name = payload.payload;
        },
        setStatus: (state, payload) => {
            state.status = payload.payload;
        }
    },
    extraReducers: {
        [fetchHotelsector.fulfilled]: (state, action) => {
            state.hotelsectors = action.payload;
        },
        [addHotelsector.fulfilled]: () => {
            alert("Data Added successfully");
        },
        [hotelsectorDelete.fulfilled]: () => {
            alert("Data Deleted Successfully");
            window.location.href = "/hotelsector/showhotelsector";
        }
    }
});

export const { setName, setStatus } = HotelsectorOperation.actions;

export default HotelsectorOperation.reducer;