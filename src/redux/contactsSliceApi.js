import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63566508a2d1844a9773a623.mockapi.io/api/v1' }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags:['Contacts'],
    }),

    addContact: builder.mutation({
      query: (values) => ({
        url: `/contacts`,
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    })
  }),
})

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactApi;