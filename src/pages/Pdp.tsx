import React from 'react'
import { useParams } from 'react-router'

import { Alert, CircularProgress } from '@mui/material'

import ProductCard from '../components/ProductCard'
import { useGetProductsQuery } from '../services/products'

const Pdp: React.FC = () => {
  const { upc } = useParams<{ upc: string }>()

  const { data, error, isLoading } = useGetProductsQuery()

  if (error) {
    return <Alert severity="error">Error Fetching Products</Alert>
  }

  if (isLoading) {
    return <CircularProgress />
  }

  const products = data || []

  const product = products.find(product => product.UPC === upc)
  return product ? (
    <ProductCard product={product} />
  ) : null
}

export default Pdp
