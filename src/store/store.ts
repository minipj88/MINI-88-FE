import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authReducer,authApi } from "./slices/authSlice";
import { productReducer } from "./slices/productSlice";
import { creditScoreReducer } from "./slices/creditScoreSlice";
import { profileApi } from "./slices/profileSlice";



export const store = configureStore({
  reducer: {
    auth:authReducer,
    product:productReducer,
    creditScore:creditScoreReducer,
    [authApi.reducerPath] : authApi.reducer,
    [profileApi.reducerPath] : profileApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware,profileApi.middleware)
})



type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
