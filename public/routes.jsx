var React = require('react')
var Index = require('./containers/Index/index.jsx!')
var App = require('./containers/App/index.jsx!')
var Feature = require('./containers/Feature/index.jsx!')
var About = require('./containers/About/index.jsx!')
var Dashboard = require('./containers/Dashboard/index.jsx!')
var Login = require('./containers/Login/index.jsx!')
var Router = require('react-router')
var Route = Router.Route
var IndexRoute = Router.IndexRoute

// var tree
// if (typeof window !== 'undefined') {
//   console.log('-----------------------')
//   tree = require('./state')
// } else {
//   tree = ''
// }

module.exports = (
  <Route name="Home" path="/" component={App} >
   <IndexRoute name="Index" component={Index} />
   <Route name="Feature" path="/feature" component={Feature} />
   <Route name="About" path="/about" component={About} />
   <Route name="Login" path="/login" component={Login} />
   <Route name="Dashboard" path="/dashboard" component={Dashboard} />
  </Route>
)

