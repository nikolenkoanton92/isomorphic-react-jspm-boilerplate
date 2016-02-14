var React = require('react')
var mixins = require('baobab-react/mixins')

module.exports = React.createClass({
  mixins: [mixins.branch],
  cursors: {
    title: ['title'],
    featureList: ['featureList']
  },
  render: function() {
    var featureList = this.state.featureList.map(function(elementList) {
      return (
        <li>{elementList}</li>
        )
    })
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">{this.state.title}</h2>
          <p className="text-center">Boilerplate includes such features </p>
          <ul>
          {featureList}
          </ul>
        </div>
      </div>
      )
  }
})

