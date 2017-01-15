import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import Home from 'components/Home'
import Render from 'components/Render'

export default (
  <Route path='/' component={App}>
    <Route path='/render' component={Render} />
    <IndexRoute component={Home} />
  </Route>
)
