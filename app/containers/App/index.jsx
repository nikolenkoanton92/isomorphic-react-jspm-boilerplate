var React = require('react')
var Navbar = require('../../components/Navbar/index.jsx!')
var Footer = require('../../components/Footer/index.jsx!')

module.exports = React.createClass({
  render: function() {
    return (
      <div>
      <Navbar />
      <div>{this.props.children}</div>
      <Footer />
      </div>
      )
  }
})
