import React, { useState } from 'react'

import { Grid } from '@mui/material'

import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { Product } from '../model/Product'

type Props = {
  products: Product[]
}

const Plp: React.FC<Props> = ({ products }) => {
  const [inStock, setInStock] = useState<boolean | undefined>(undefined)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Grid container direction="column" minHeight="100vh">
      <Grid item xs={12}>
        <Header inStock={inStock} setInStock={setInStock} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Grid>
      <Grid container spacing={2} item xs={12} flex={1} p={2} direction="row" justifyContent="start">
        {products
          .filter(product => inStock === undefined ? true : inStock ? product.availability.stock > 0 : product.availability.stock === 0)
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
