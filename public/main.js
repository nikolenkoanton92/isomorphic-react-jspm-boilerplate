import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/css/bootstrap.css!'

import { Router, browserHistory } from 'react-router'
import routes from './routes.jsx!'
import { Root } from 'baobab-react/wrappers'
import state from './tree'

var tree = window.tree = state(window._BAOBAB_TREE_.tree)

ReactDOM.render(<Root tree={tree }><Router routes={routes} history={browserHistory} /></Root>, document.getElementById('main'))




