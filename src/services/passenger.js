import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const passengerApi = createApi({
    // The unique key that defines where the Redux store will store our cache.
    reducerPath: 'passengerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://my-json-server.typicode.com/raflimardhian/react-redux',
    }),
    endpoints: (builder) => ({
        getAllPassenger: builder.query({
            query: () => ({
            url: 'passenger',
            method: 'GET'
            })
        }),
    }),
})

export const { useGetAllPassengerQuery } = passengerApi