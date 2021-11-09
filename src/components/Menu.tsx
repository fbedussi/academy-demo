import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, ButtonGroup } from '@mui/material'

import { setFilterType } from '../store/actions'
import { selectFilterType } from '../store/selectors'

type Props = {
}

const Menu: React.FC<Props> = () => {
  const inStock = useSelector(selectFilterType)
  const dispatch = useDispatch()

  return (
    <ButtonGroup variant="contained" >
      <Button variant={inStock === true ? 'contained' : 'outlined'} onClick={() => dispatch(setFilterType(inStock === null ? true : null))}>In Stock</Button>
      <Button variant={inStock === false ? 'contained' : 'outlined'} onClick={() => dispatch(setFilterType(inStock === null ? false : null))}>Out of Stock</Button>
    </ButtonGroup>
  )
}

export default Menu
