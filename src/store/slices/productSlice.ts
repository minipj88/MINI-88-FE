import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';


interface ContentObjectType {
  age: number;
  cbName: string | null;
  financialCompanyName: string;
  id: number;
  job: string;
  image: string;
  joinWay: string;
  maxAmount: string;
  maxRate: number;
  minRate: number;
  productName: string;
  productNumber: string;
  productType: string;
}
export interface ReturnProductType {
  content: ContentObjectType[];
  totalPages?: number;
}

export const productApi = createApi({
  reducerPath: 'product/productApi',
  tagTypes: ['product'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getProductList: builder.query<ReturnProductType, number>({
      query: (pageNumber) => ({
        url: `main?page=${pageNumber}`,
        transformResponse: (response:string) => JSON.parse(response)
      }),
    }),
  }),
});

const initialState: ReturnProductType = {
  content: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProduct(state, action: PayloadAction<ReturnProductType['content']>) {
      state.content = [...action.payload];
    },
  },
});


export const { useGetProductListQuery } = productApi;
export const { getProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
