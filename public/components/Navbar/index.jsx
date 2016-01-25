var React = require('react')
var Router = require('react-router')
var Link = Router.Link

module.exports = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <ul className="nav navbar-nav">
            <li><Link to="/">Index</Link></li>
            <li><Link to="/feature">Feature</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
      )
  }
})
