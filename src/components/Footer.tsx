import React from 'react'

import {
  Button, ButtonGroup, Grid,
  useTheme
} from '@mui/material'

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid container bgcolor={theme.palette.grey[400]} p={2}>
      <Grid item xs={8}>
      </Grid>
      <Grid item xs={4}>
        <Grid container justifyContent="end">
          <ButtonGroup variant="text" aria-label="outlined primary button group">
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><Button variant="text">twitter</Button></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><Button variant="text">facebook</Button></a>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
