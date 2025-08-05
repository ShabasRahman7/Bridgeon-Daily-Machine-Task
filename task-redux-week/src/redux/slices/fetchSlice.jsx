import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading:false,
    error: null,
}

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await axios.get("http://localhost:3001/users");
  return res.data;
});

const fetchSlice = createSlice({
  name:"user",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
      .addCase(fetchUser.pending,(state)=>{
        state.loading=true;
        state.error=null;
      })
      .addCase(fetchUser.fulfilled,(state,action)=>{
        state.loading=false;
        state.data=action.payload;
      })
      .addCase(fetchUser.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message;
      });
  },
});

export const {fetchuser} = fetchSlice.actions

export default fetchSlice.reducer