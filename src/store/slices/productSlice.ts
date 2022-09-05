import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

// createApi 작성
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
  totalPages: number;
}
interface ActionProductPagingType {
  pageNumber: number;
}

export const productApi = createApi({
  reducerPath: 'product/productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getProductList: builder.query<ReturnProductType, ActionProductPagingType>({
      query: ({ pageNumber }) => ({
        url: `main?page=${pageNumber}`,
      }),
    }),
  }),
});

const initialState = {};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

// createAPi export 하기
export const { useGetProductListQuery } = productApi;

export const productReducer = productSlice.reducer;
