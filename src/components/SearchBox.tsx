import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Grid, TextField } from '@mui/material'

import { setSearchTerm } from '../store/actions'
import { selectSearchTerm } from '../store/selectors'

type Props = {
}

const SearchBox: React.FC<Props> = () => {
  const searchTerm = useSelector(selectSearchTerm)
  const dispatch = useDispatch()

  return (
    <Grid container spacing={2} alignItems="center" pt={1} pb={2}>
      <Grid item xs={8}>
        <TextField label="search" variant="outlined" fullWidth value={searchTerm} onChange={(ev) => dispatch(setSearchTerm(ev.target.value.toLowerCase()))} />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" onClick={() => dispatch(setSearchTerm(''))}>Reset</Button>
      </Grid>
    </Grid>
  )
}

export default SearchBox
