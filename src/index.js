import React from 'react'
import ReactDOM from 'react-dom'
import '@assets/style/index.css'
import Router from '@/router'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
