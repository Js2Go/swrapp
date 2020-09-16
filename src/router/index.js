import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import AuthRoute from '@components/AuthRoute'
import routes from './routes'

export default function () {
  return (
    <Suspense fallback={ null }>
      <Router>
        <Switch>
          <AuthRoute routes={routes} />
        </Switch>
      </Router>
    </Suspense>
  )
}
