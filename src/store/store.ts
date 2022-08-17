import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { exampleReducer } from "./slices/ExampleSlice";


export const store = configureStore({
  reducer: {
    example: exampleReducer
  }
})



type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
