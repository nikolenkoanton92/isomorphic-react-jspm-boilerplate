var React = require('react')

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">Feature Page</h2>
          <p className="text-center">Boilerplate includes such features </p>
          <ul>
            <li>JSPM</li>
            <li>Express</li>
            <li>React</li>
            <li>Babel</li>
            <li>React Router</li>
            <li>Authentication</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
      )
  }
})

