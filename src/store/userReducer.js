import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//async action creator

export const addUser = createAsyncThunk('users/addUser',
  async (userData, {rejectWithValue}) => {


    try {
      //make http request
      const response = await axios.post('https://api.techenablesme.com/clarity/api/login'
        , { username: userData.username, password: userData.password })

      if (response.status === 200) {
        return response.data
      }
      else {
        
        return rejectWithValue('Unexpected code' + response.status)
      }
    } catch (error) {
console.log(error);

      return rejectWithValue(error.response ? error.response.status : error.message)
    }
  });

const userSlice = createSlice({
  name: "users",
  initialState: {user:null,loading:false,error:null},

  reducers: {},extraReducers:(builder)=>{
    builder.addCase(addUser.pending,(state)=>{
      state.loading=true;
      state.error=null;
    }).addCase(addUser.fulfilled,(state,action)=>{
      state.loading=false;
      state.user=action.payload;
    }).addCase(addUser.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.payload
      console.log('error',state.error);
      
    })
  }
})

export default userSlice.reducer;