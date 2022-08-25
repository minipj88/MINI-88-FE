import { createSlice } from "@reduxjs/toolkit"




// createApi 작성




const initialState = {

  
}


const productSlice = createSlice({
  name:'product',
  initialState,
  reducers: {}

})


// createAPi export 하기


export const productReducer = productSlice.reducer;

