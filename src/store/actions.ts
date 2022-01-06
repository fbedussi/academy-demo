import { AppThunk } from '../model/model'
import { slice } from './slice'

const fetchData = (): AppThunk => dispatch => {
  fetch('https://assets.fc-dev.instore.oakley.com/assets/products/products.json')
    .then(res => res.json())
    .then(products => dispatch(slice.actions._loadData(products)))
}

const plpActions = {
  ...slice.actions,
  fetchData,
}

export default plpActions
