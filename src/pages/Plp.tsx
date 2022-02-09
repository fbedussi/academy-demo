import React from 'react'
import { useSelector } from 'react-redux'

import { Alert, CircularProgress, Grid } from '@mui/material'

import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { useGetProductsQuery } from '../services/products'
import { selectFilterType, selectSearchTerm } from '../store/selectors'

const Plp: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery()

  const searchTerm = useSelector(selectSearchTerm)
  const inStock = useSelector(selectFilterType)
  const products = data || []

  if (error) {
    return <Alert severity="error">Error Fetching Products</Alert>
  }

  return (
    <Grid container direction="column" minHeight="100vh">
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid container spacing={2} item xs={12} flex={1} p={2} direction="row" justifyContent="start">
        {isLoading ? <CircularProgress /> : products
          .filter(product => inStock === null ? true : inStock ? product.availability.stock > 0 : product.availability.stock === 0)
          .filter(product => searchTerm ? product.name.toLowerCase().includes(searchTerm) : true)
          .map(product => <ProductCard key={product.UPC} product={product} />)}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>


  )
}

export default Plp
