import React, { useEffect, useState } from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import history from './history'
import { Product } from './model/Product'
import Pdp from './pages/Pdp'
import Plp from './pages/Plp'

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://assets.fc-dev.instore.oakley.com/assets/products/products.json')
      .then(res => res.json())
      .then(products => setProducts(products))
  }, [])

  return (
    <Router history={history}>
      <Switch>
        <Route path="/product/:upc">
          <Pdp products={products} />
        </Route>
        <Route path="/">
          <Plp products={products} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
