import React from 'react'
import { Link } from 'react-router-dom'

import {
  Card, CardContent, CardMedia,
  Chip, Grid, Typography
} from '@mui/material'

import { Product } from '../model/Product'

const mapCurrencyCodeToSymbol: Record<string, string> = {
  USD: '$',
  EUR: '€',
}

type Props = {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, price, availability } = product

  return (
    <Grid item xs={3}>
      <Link to={`/product/${product.UPC}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card>
          <CardMedia
            component="img"
            image="https://via.placeholder.com/350"
            alt={name}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {mapCurrencyCodeToSymbol[price.currency]} {price.current.value}
            </Typography>
            {availability.stock > 0 && <Chip label="in stock" />}
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

export default ProductCard
