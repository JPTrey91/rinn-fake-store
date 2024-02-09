import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      providesTags: ["Products"],
      query: () => "products",
    }),
  }),
});

export const { useFetchProductsQuery } = productsApi;
