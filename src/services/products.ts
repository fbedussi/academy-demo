import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

import { Product } from '../model/Product'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: 'https://assets.fc-dev.instore.oakley.com/assets/products/products.json' })),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '',
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
