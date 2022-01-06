import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Router, Switch } from 'react-router-dom'

import history from './history'
import Pdp from './pages/Pdp'
import Plp from './pages/Plp'
import plpActions from './store/actions'

const App: React.FC = () => {
  const dispatch = useDispatch()

  dispatch(plpActions.fetchData())

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
