import React from 'react'

import { Grid } from '@mui/material'

import Menu from './Menu'
import SearchBox from './SearchBox'

type Props = {
  inStock?: boolean
  setInStock: (flag?: boolean) => void
  searchTerm: string
  setSearchTerm: (term: string) => void
}

const Header: React.FC<Props> = ({ inStock, setInStock, searchTerm, setSearchTerm }) => {
  return (
    <Grid container spacing={2} alignItems="center" borderBottom="solid 1px">
      <Grid item xs={4}>
        <img src="https://via.placeholder.com/150x80" alt="logo" style={{ display: 'block' }} />
      </Grid>
      <Grid item xs={4} justifyContent="center" >
        <Menu setInStock={setInStock} inStock={inStock} />
      </Grid>
      <Grid item xs={4}>
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Grid>
    </Grid>
  )
}

export default Header
