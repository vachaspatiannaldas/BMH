import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const addContact = createAsyncThunk('addContact', async(data)=>{
   
    const {name,email,subject,message} = data;

    const formdata = new FormData();
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('subject', subject);
    formdata.append('message', message);

    const response = await axios.post('http://localhost:8000/api/contact', formdata);

    console.log(response);
    return response.data;
});



export const contact = createSlice({
    name:'contact',
    initialState:{
        name:'',
        email:'',
        subject:'',
        message:'',
    },

    reducers:{
       
        setName:(state,payload)=>{
            state.name = payload.payload
        },
        setEmail:(state,payload)=>{
            state.email = payload.payload
        },
        setSubject:(state,payload)=>{
            state.subject = payload.payload
        },
        setMessage:(state,payload)=>{
            state.message = payload.payload
        },
        

    },

    extraReducers:{
        [addContact.fulfilled]:()=>{
            alert("Message Sent successfully!!!");         
        }

       
    }
}); 
export const {setEmail,setSubject,setMessage,setName} = contact.actions;
export default contact.reducer;