import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  useData : {
    email: '',
    username: '',
    token: ''
  }
}

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{}
})



export const authReducer = authSlice.reducer;


