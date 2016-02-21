var express = require('express')
var path = require('path')
var app = express()

require('jsx-hook')()
var routes = require('./routes/index')
var bodyParser = require('body-parser')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var session = require('express-session')

var React = require('react')
var Router = require('react-router')
var match = Router.match
var RouterContext = Router.RouterContext
var ReactDOMServer = require('react-dom/server')
var clientRoutes = require('./public/routes.jsx')

var Root = require('baobab-react/wrappers').Root
var Baobab = require('baobab')
var Tree = require('./public/state')

var user = {
  id: 1,
  username: 'hunter33',
  password: 'password1'
}

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(session({
  secret: 'secret',
  resave: false,
  saveUnitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function(username, password, done) {
  if (username === user.username && password === user.password) {
    return done(null, user)
  } else {
    return done(null, false, {
      message: 'Username and password do not match'
    })
  }
}))

passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  if (user.id === id) {
    done(null, user)
  } else {
    done('Wrong id')
  }
})

app.get('/getData', function(req, res) {
  var fakeData = 'Hello From servet to client'
  res.json({
    data: fakeData
  })
})

app.use('/', routes)

app.get('*', function(req, res) {

  match({
    routes: clientRoutes,
    location: req.url
  }, function(error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {

      var tree = Tree(res.locals.tree)

      var props = {
        tree: tree
      }

      var page = ReactDOMServer.renderToString(React.createElement(Root, props, React.createElement(RouterContext, renderProps)))
      res.render('layout', {
        page: page,
        appTree: 'window._BAOBAB_TREE_=' + JSON.stringify(props)
      })

    } else {
      res.status(404).send('Not Found')
    }
  })
})






app.listen(4000, function() {
  console.log('Server listen at *:4000')
})



