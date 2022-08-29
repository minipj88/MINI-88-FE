import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux";


// createApi 작성 
export const api이름 = createApi({
  reducerPath: '리듀서이름',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    // 신용등급넣어주기: builder.mutation({
    //   query: () => '',
    // }),
    // 사용자신용등급불러오기: builder.query({
    //   query: () => '',
    // }),
  }),
});
 


// export const {
//   use요청이름Query
// } = postApi;



const initialState = {
  creditScoreData: {
    quizScore: 0,
    resultCreditScore: 0
  }
}


export const creditScoreSlice = createSlice({
  name:'creditScore',
  initialState,
  reducers: {
    incQuizScore: (state) => {
      state.creditScoreData.quizScore = state.creditScoreData.quizScore + 1
    },
    creditScoreCalc: (state) => {
      // 퀴즈점수 -> 신용점수
      switch(state.creditScoreData.quizScore) {
        case 8: 
          state.creditScoreData.resultCreditScore = Math.floor(Math.random() * 78) + 942
          break
        case 7: 
          state.creditScoreData.resultCreditScore = Math.floor(Math.random() * 50) + 891
          break
        case 6:
          state.creditScoreData.resultCreditScore = Math.floor(Math.random() * 58) + 832
          break
        case 5: 
          state.creditScoreData.resultCreditScore = Math.floor(Math.random() * 63) + 768
          break
        case 4: 
          state.creditScoreData.resultCreditScore = Math.floor(Math.random() * 69) + 698
          break
        case 3: 
          state.creditScoreData.resultCreditScore = Math.floor(Math.random() * 67) + 630
          break
        case 2:
          state.creditScoreData.resultCreditScore = Math.floor(Math.random() * 99) + 530
          break
        case 1:
          state.creditScoreData.resultCreditScore = Math.floor(Math.random() * 75) + 454
          break
        case 0: 
          state.creditScoreData.resultCreditScore = Math.floor(Math.random() * 118) + 335
          break
        default: return
      }
    }
  }

})


// createAPi export 하기


export const { incQuizScore, creditScoreCalc } = creditScoreSlice.actions
export function useCreditScoreCalc() {
  // const result = useAppSelector((state)  => state.creditScore.creditScoreData.resultCreditScore)
  const dispatch = useDispatch()
  return { dispatch }
}

export const creditScoreReducer = creditScoreSlice.reducer
