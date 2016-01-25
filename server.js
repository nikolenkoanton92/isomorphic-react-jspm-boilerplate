var express = require('express')
var path = require('path')
var app = express()


require('jsx-hook')()

var ReactDOMServer = require('react-dom/server')
var React = require('react')
var Router = require('react-router')
var match = Router.match

var context = require('react-router/lib/RoutingContext')
var routes = require('./public/routes.jsx')

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(function(req, res) {

  match({
    routes: routes,
    location: req.url
  }, function(error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {

      var page = ReactDOMServer.renderToString(React.createElement(context, renderProps))

      res.render('layout', {
        page: page
      })

    } else {
      res.status(404).send('Not found')
    }
  })
})

app.listen(4000, function() {
  console.log('Server listen at *:4000')
})



