import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Router, Switch } from 'react-router-dom'

import history from './history'
import Pdp from './pages/Pdp'
import Plp from './pages/Plp'
import { loadData } from './store/actions'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://assets.fc-dev.instore.oakley.com/assets/products/products.json')
      .then(res => res.json())
      .then(products => dispatch(loadData(products)))
  }, [dispatch])

  return (
    <Router history={history}>
      <Switch>
        <Route path="/product/:upc">
          <Pdp />
        </Route>
        <Route path="/">
          <Plp />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
