import React from 'react'

import { Grid } from '@mui/material'

import Menu from './Menu'
import SearchBox from './SearchBox'

type Props = {
}

const Header: React.FC<Props> = () => {
  return (
    <Grid container spacing={2} alignItems="center" borderBottom="solid 1px">
      <Grid item xs={4}>
        <img src="https://via.placeholder.com/150x80" alt="logo" style={{ display: 'block' }} />
      </Grid>
      <Grid item xs={4} justifyContent="center" >
        <Menu />
      </Grid>
      <Grid item xs={4}>
        <SearchBox />
      </Grid>
    </Grid>
  )
}

export default Header
