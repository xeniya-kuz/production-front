import { USER_LOCALSTORAGE_KEY } from '@/6shared/const/localstorage'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? ''
            if (token !== '') {
                headers.set('Authorization', token)
            }

            return headers
        },
    }),
    endpoints: () => ({}),
})
