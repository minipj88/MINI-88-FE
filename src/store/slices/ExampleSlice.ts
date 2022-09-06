import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HelloWorldPayloadTypes } from "../actions/ExampleActions";



interface ExampleStateTypes {
  hello: string
  allString: string;
}

const initialState: ExampleStateTypes = {
  hello: 'hello',
  allString: ''
}

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    helloWorld(state, action: PayloadAction<HelloWorldPayloadTypes>) {
      state.allString = state.hello + action.payload.myname

    }
  },
})


export const exampleReducer = exampleSlice.reducer;
export const { helloWorld } = exampleSlice.actions;