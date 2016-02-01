var express = require('express')
var path = require('path')
var app = express()
var routes = require('./routes/index')
var bodyParser = require('body-parser')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var session = require('express-session')

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

app.use('/', routes)


app.listen(4000, function() {
  console.log('Server listen at *:4000')
})



