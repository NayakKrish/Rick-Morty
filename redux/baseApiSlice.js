import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    getCharacterDetails: builder.query({
      query: ({pageNo}) => ({
        url: `https://rickandmortyapi.com/api/character?page=${pageNo}`,
      }),
    }),
  }),
});

export default baseApiSlice.reducer;

export const {useGetCharacterDetailsQuery} = baseApiSlice;