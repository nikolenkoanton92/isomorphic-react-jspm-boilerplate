import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/css/bootstrap.css!'

import { Router, browserHistory } from 'react-router'
import routes from './routes.jsx!'
import { Root } from 'baobab-react/wrappers'
import state from './state'


ReactDOM.render(<Root tree={state }><Router routes={routes} history={browserHistory} /></Root>, document.getElementById('main'))




