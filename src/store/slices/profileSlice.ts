import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const profileApi = createApi({
  reducerPath: 'profile/profileApi',
  tagTypes:['Profile'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints:(builder) => ({
    profileChange: builder.mutation({
      query: (data) => ({
        url: 'member',
        method:'PUT',
        body:data
      })
    })
  })
})

export const { useProfileChangeMutation} = profileApi