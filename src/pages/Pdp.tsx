import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import ProductCard from '../components/ProductCard'
import { selectProducts } from '../store/selectors'

const Pdp: React.FC = () => {
  const { upc } = useParams<{ upc: string }>()

  const products = useSelector(selectProducts)

  const product = products.find(product => product.UPC === upc)
  return product ? (
    <ProductCard product={product} />
  ) : null
}

export default Pdp
