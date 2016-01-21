var React = require('react')
var Navbar = require('../../components/Navbar/index.jsx!')

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        <h2>Render by server and client</h2>
      </div>
      )
  }
})
