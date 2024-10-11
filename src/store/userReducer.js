import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
     // console.log('action', action);
      const result = axios({
        method: 'post',
        url: 'https://api.techenablesme.com/clarity/api/login',
        data: {
          username: action.payload.username,
          password: action.payload.password
        }
      }).then((response) => {
        
       if(response.status === 200 )
       {
        //console.log(response.data);
        state=response.data;
        console.log('state',state);
        
       }
      }).catch((err) => {
        console.log(err)
        alert(err)
      }
      )




    }
  }
})
export const { addUser } = userSlice.actions;
export default userSlice.reducer;