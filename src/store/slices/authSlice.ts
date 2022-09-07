import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';

interface ReturnSignupType {
  data: {
    createTime: Date;
    updateTime: Date;
    name: string;
    job: string;
    age: string;
    profilePhoto: string;
    email: string;
  };
}

interface ReturnSigninType {
  email: string;
  name: string;
  profilePhoto: string;
  job: string;
  age: number;
  credit: number;
  point: number;
}

interface ActionSignupType {
  email: string;
  name: string;
  job: string;
  age: number;
  password: string;
  profilePhoto: string;
}

export const authApi = createApi({
  reducerPath: 'auth/authApi',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<ReturnSignupType, ActionSignupType>({
      query: (data) => ({
        url: 'register',
        method: 'POST',
        body: data,
      }),
    }),
    signin: builder.mutation<ReturnSigninType, Partial<ActionSignupType>>({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data,
      }),
    }),
    getMember: builder.query<ReturnSignupType, Partial<ActionSignupType>>({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export interface UserInfo {
  userData: {
    age: number;
    credit: number;
    point: number;
    email: string;
    job: string;
    name: string;
    profilePhoto: string;
  };
}

const initialState: UserInfo = {
  userData: {
    age: 0,
    credit: 0,
    point: 0,
    email: '',
    job: '',
    name: '',
    profilePhoto: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<UserInfo['userData']>) {
      // state.userData = action.payload;
      state.userData.age = action.payload.age;
      state.userData.credit = action.payload.credit;
      state.userData.email = action.payload.email;
      state.userData.job = action.payload.job;
      state.userData.name = action.payload.name;
      state.userData.point = action.payload.point;
      state.userData.profilePhoto = action.payload.profilePhoto;
    },
    logout(state) {
      localStorage.clear();
      state.userData.age = 0;
      state.userData.credit = 0;
      state.userData.email = '';
      state.userData.job = '';
      state.userData.name = '';
      state.userData.point = 0;
      state.userData.profilePhoto = '';
      window.location.pathname = '/signin';
    },
  },
});

export const { useSigninMutation, useSignupMutation } = authApi;
export const { getUser, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
