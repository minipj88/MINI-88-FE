import { createSlice } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


interface ReturnSignupType {
  data: {
    accessToken: string
  }
  createTime: Date;
  updateTime: Date;
  nickname: string;
  job: string;
  age: string;
}
interface ActionSignupType {
  email: string;
  nickname: string;
  job: string;
  age: number;
  password: string;
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
          url: '/regist',
          method: 'POST',
          body: data
        })
      }),
      signin: builder.mutation<ReturnSignupType, Partial<ActionSignupType>>({
        query: (data) => ({
          url: '/login',
          method: 'POST',
          body: data
        })
      })
    })
  })


const initialState = {
  userData: {
    email: '',
    username: '',
    job: '',
    age: '',
  },
  accessToken: 'Jewargklawle3ork2',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getToken(state, action) {
      state.accessToken = action.payload.data.accessToken
    },
    logout(state) {
      localStorage.removeItem('user');
      state.userData = {
        email: '',
        username: '',
        job: '',
        age: '',
      }
      state.accessToken = ''
      window.location.pathname = '/login';
    }
  }
})


export const { useSigninMutation, useSignupMutation } = authApi
export const authReducer = authSlice.reducer;


