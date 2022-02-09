import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import history from './history'
import Pdp from './pages/Pdp'
import Plp from './pages/Plp'

const App: React.FC = () => {
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
