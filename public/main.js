import React from 'react'
import App from './containers/App/index.jsx!'
import ReactDOM from 'react-dom'
import 'bootstrap/css/bootstrap.css!'

import About from './containers/About/index.jsx!'
import Feature from './containers/Feature/index.jsx!'
import Index from './containers/Index/index.jsx!'

import page from 'page'

var PageRouter = React.createClass({
  getInitialState: function() {
    return {
      component: <div />
    }
  },
  componentDidMount: function() {
    var self = this

    this.props.routes.forEach(function(route) {

      var url = route[0]
      var Component = route[1];

      page(url, function(ctx) {
        self.setState({
          component: <Component params={ctx.params} querystring={ctx.querystring} />
        })
      })

    })

    page.start()
  },
  render: function() {
    return this.state.component
  }
})

let routes = [
  ['/', Index],
  ['/about', About],
  ['/feature', Feature]
]

ReactDOM.render((<App><PageRouter routes={routes} /></App>), document.getElementById('main'))




