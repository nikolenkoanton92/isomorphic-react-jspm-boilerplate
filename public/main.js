import React from 'react'
import App from './containers/App/index.jsx!'
import ReactDOM from 'react-dom'
import 'bootstrap/css/bootstrap.css!'

import About from './containers/About/index.jsx!'
import Feature from './containers/Feature/index.jsx!'
import Index from './containers/Index/index.jsx!'

import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
const history = createHistory()

import routes from './routes'

ReactDOM.render((
  <Router routes={routes} history={history} />), document.getElementById('main'))


