import React from 'react'

import { Button, Grid, TextField } from '@mui/material'

type Props = {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

const SearchBox: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  return (
    <Grid container spacing={2} alignItems="center" pt={1} pb={2}>
      <Grid item xs={8}>
        <TextField label="search" variant="outlined" fullWidth value={searchTerm} onChange={(ev) => setSearchTerm(ev.target.value.toLowerCase())} />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" onClick={() => setSearchTerm('')}>Reset</Button>
      </Grid>
    </Grid>
  )
}

export default SearchBox
