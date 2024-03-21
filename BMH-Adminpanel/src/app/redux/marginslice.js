const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/roomprice");
  // console.log(response.data);
  return response.data;
});

export const fetchHotelgetid = createAsyncThunk("fetchHotelgetid", async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/hotelgetid");
  return response.data;
});

export const fetchRoom = createAsyncThunk("fetchRoom", async () => {
  var tokenid = sessionStorage.getItem("username");
  const token = tokenid; // Replace with your actual token

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("http://127.0.0.1:8000/api/room", config);
  console.log("Fetched Rooms:", response.data); // Log fetched rooms
  return response.data;
});



export const addMargin = createAsyncThunk("addMargin", async (data) => {
  const formData = new FormData();
  formData.append("hotel_id", data.hotel_id);
  formData.append("room_id", data.room_id);
  formData.append("start_date", data.start_date);
  formData.append("end_date", data.end_date);
  formData.append("festival_name", data.festival_name);
  formData.append("price", data.price);
  formData.append("margin_percentage", data.margin_percentage);
  formData.append("total_price", data.total_price);

  const response = await axios.post(
    "http://127.0.0.1:8000/api/roomprice/",
    formData,
    config
  );
  return response.data;
});

export const marginDelete = createAsyncThunk('marginDelete', async (id) => {
 
  const response = await axios.delete(`http://127.0.0.1:8000/api/roomprice/${id}`, config);
  return response.data;
});


export const PriceOperation = createSlice({
  name: "PriceOperation",
  initialState: {
    data: [],
    hotel_id: "",
    room_id: "",
    start_date: "",
    end_date: "",
    festival_name: "",
    price: 0,
    margin_percentage: 0,
    total_price: 0,
    rooms: [],
    hotelidshow: [],
  },
  reducers: {
    setHotelid: (state, payload) => {
      state.hotel_id = payload.payload;
    },
    setRoomid: (state, payload) => {
      state.room_id = payload.payload;
    },
    setStartDate: (state, payload) => {
      state.start_date = payload.payload;
    },
    setEndDate: (state, payload) => {
      state.end_date = payload.payload;
    },
    setFestivalName: (state, payload) => {
      state.festival_name = payload.payload;
    },
    setPrice: (state, payload) => {
      state.price = payload.payload;
    },
    setMarginPercentage: (state, payload) => {
      state.margin_percentage = payload.payload;
    },
    setTotalPrice: (state, payload) => {
      state.total_price = payload.payload;
    },
  },
  extraReducers: {
    [addMargin.fulfilled]: () => {
      alert("Data added successfully");
      // window.location.href="/room/roomshow";
    },
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [fetchRoom.fulfilled]: (state, action) => {
      state.rooms = action.payload;
    },
    [fetchHotelgetid.fulfilled]: (state, action) => {
      state.hotelidshow = action.payload;
    },
    [marginDelete.fulfilled]: () => {
      alert("Data Deleted Successfully");
      window.location.href = "/margin/show";
    }
  },
});

export const {
  setEndDate,
  setFestivalName,
  setHotelid,
  setMarginPercentage,
  setPrice,
  setRoomid,
  setStartDate,
  setTotalPrice,
} = PriceOperation.actions;

export default PriceOperation.reducer;
