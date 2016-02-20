var React = require('react')
var Link = require('react-router').Link

module.exports = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <ul className="nav navbar-nav">
        <li><Link to="/">Index</Link></li>
        <li><Link to="/feature">Feature</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
      )
  }
})

