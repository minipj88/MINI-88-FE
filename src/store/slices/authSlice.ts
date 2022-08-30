import { createSlice } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


interface ReturnSignupType {
  data: {
    createTime: Date;
    updateTime: Date;
    username: string;
    job: string;
    age: string;
    profilePhoto: string;
    email:string;
  }
}
interface ActionSignupType {
  email: string
  nickname: string
  job: string
  age: number
  password: string
  profilePhoto: ''
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
          body: data
        })
      }),
      signin: builder.mutation<ReturnSignupType, Partial<ActionSignupType>>({
        query: (data) => ({
          url: 'login',
          method: 'POST',
          body: data
        })
      }),
      getMember: builder.query<ReturnSignupType, Partial<ActionSignupType>>({
        query: (data) => ({
          url: 'login',
          method: 'POST',
          body: data
        })
      })
    })
  })


const initialState = {
  userData: {
    email: 'qweqwwqeeqweqwe',
    username: '',
    job: '',
    age: '',
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getToken(state, action) {
      state.userData = action.payload.data
    },
    logout(state) {
      localStorage.removeItem('user');
      state.userData = {
        email: '',
        username: '',
        job: '',
        age: '',
      }
      window.location.pathname = '/login';
    }
  }
})


export const { useSigninMutation, useSignupMutation } = authApi
export const authReducer = authSlice.reducer;


