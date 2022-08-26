import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authReducer,authApi } from "./slices/authSlice";
import { productReducer } from "./slices/productSlice";



export const store = configureStore({
  reducer: {
    auth:authReducer,
    product:productReducer,
    [authApi.reducerPath] : authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})



type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
