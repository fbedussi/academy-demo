import React from 'react'

import { Button, ButtonGroup } from '@mui/material'

type Props = {
  setInStock: (flag?: boolean) => void
  inStock?: boolean
}

const Menu: React.FC<Props> = ({ setInStock, inStock }) => {
  return (
    <ButtonGroup variant="contained" >
      <Button variant={inStock === true ? 'contained' : 'outlined'} onClick={() => setInStock(inStock === undefined ? true : undefined)}>In Stock</Button>
      <Button variant={inStock === false ? 'contained' : 'outlined'} onClick={() => setInStock(inStock === undefined ? false : undefined)}>Out of Stock</Button>
    </ButtonGroup>
  )
}

export default Menu
