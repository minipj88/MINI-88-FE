import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

// createApi 작성
interface ReturnProductType {
  content: [
    {
      age: number;
      cbName: string | null;
      financialCompanyName: string;
      id: number;
      job: string;
      joinWay: string;
      maxAmount: string;
      maxRate: number;
      minRate: number;
      productName: string;
      productNumber: string;
      productType: string;
    },
  ];
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: {
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
  };
  totalPages: number;
}
interface ActionProductPagingType {
  data: {
    pageable: {
      offset: number;
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      sort: {
        sorted: boolean;
        unsorted: boolean;
      };
      unpaged: boolean;
    };
  };
}

export const productApi = createApi({
  reducerPath: 'product/productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getProductList: builder.query<ReturnProductType, ActionProductPagingType>({
      query: ({ data }) => ({
        url: `main?offset=0&pageNumber=${data.pageable.pageNumber}&pageSize=5&paged=true&sort.sorted=true&sort.unsorted=false&unpaged=false`,
      }),
    }),
  }),
});

const initialState = {
  page: 0,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

// createAPi export 하기
export const { useGetProductListQuery } = productApi;

export const productReducer = productSlice.reducer;
