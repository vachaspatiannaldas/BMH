const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";
import { headers } from "../../../next.config";

export const fetchCategory = createAsyncThunk('fetchCategory', async () => {
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.get('http://127.0.0.1:8000/api/category', config);
    return response.data;
});

export const addCategory = createAsyncThunk('addCategory', async (data) => {
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    //  console.log("category = ",data);
    const { name, status } = data;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('status', status);

    const response = await axios.post('http://127.0.0.1:8000/api/category', formData, config);

    return response.data;
});

export const categoryDelete = createAsyncThunk('categoryDelete', async (id) => {
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.delete(`http://127.0.0.1:8000/api/category/${id}`, config);
    return response.data;
});

export const categoryEditFetch = createAsyncThunk('categoryEditFetch', async (id) => {
    console.log("categoryEditFetch : ", id)
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.get(`http://127.0.0.1:8000/api/category/${id}`, config);
    console.log("resonse : ", response.data)
    return response.data;

});

export const categoryUpdate = createAsyncThunk('categoryUpdate', async (id, data) => {
    const { name, status } = data;

    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('name', name);
    formData.append('status', status);
    var tokenid = sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    };
    const response = await axios.post('http://127.0.0.1:8000/api/category/' + id, formData, config)
    //headers:{'content-type':'multipart/form-data'}
    // });
    return response.data;
});


// contact 
export const getContact = createAsyncThunk('getContact', async () => {
    // var tokenid = sessionStorage.getItem('username');
    // const token = tokenid; // Replace with your actual token

    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`,
    //     },
    // };
    const response = await axios.get('http://127.0.0.1:8000/api/contact');
    return response.data;
});


export const CategoryOperation = createSlice({
    name: 'CategoryOperation',
    initialState: {
        name: '',
        status: 'active',
        categories: [],
        contact: [],
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
        [fetchCategory.fulfilled]: (state, action) => {
            state.categories = action.payload;
        },
        [getContact.fulfilled]: (state, action) => {
            state.contact = action.payload;
        },
        [addCategory.fulfilled]: () => {
            alert("Data Added successfully");
        },
        [categoryDelete.fulfilled]: () => {
            alert("Data Deleted Successfully");
            window.location.href = "/Category/categoryshow";
        },
        [categoryEditFetch.fulfilled]: (state, action) => {
            state.name = action.payload.name;
            state.status = action.payload.status;
        },
        [categoryUpdate.fulfilled]: () => {
            alert("Updated successfully");
        },
    }
});

export const { setName, setStatus } = CategoryOperation.actions;

export default CategoryOperation.reducer;