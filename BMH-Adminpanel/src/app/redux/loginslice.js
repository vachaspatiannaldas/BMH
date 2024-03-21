const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";

export const adminLogin = createAsyncThunk('adminLogin', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/login');
    return response.data;
});

export const addLogin = createAsyncThunk('addLogin', async (data) => {
    const { email, password } = data;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
    // console.log(response.data.token);

    //console.log(response.data);
    return response.data;
});


export const AdminLoginOperation = createSlice({
    name: 'AdminLoginOperation',
    initialState: {
        email: '',
        password: '',
        data: [],

    },

    reducers: {
        setEmail: (state, payload) => {
            state.email = payload.payload;
        },
        setPassword: (state, payload) => {
            state.password = payload.payload;
        },
    },

    extraReducers: {
        [adminLogin.fulfilled]: (state, action) => {
            state.data = action.payload;
        },
        [addLogin.fulfilled]: (state, action) => {
            //const router = useRouter();
            // router.push('/dashboard');
            var token = action.payload.token;
            var usertype = action.payload.user_role;
           // var message=action.payload.message;
            //console.log(usertype);
            // if(message=='success')
            // {
                sessionStorage.setItem('username', token);
                sessionStorage.setItem('userrole', usertype);
                alert("login success");
                window.location.href = "/dashboard";
            //}
            // else if(message=='failed')
            // {
            //     alert("login fail");
            //     window.location.href = "/";
            // }
        },
    }
});

export const { setEmail, setPassword } = AdminLoginOperation.actions;

export default AdminLoginOperation.reducer;





