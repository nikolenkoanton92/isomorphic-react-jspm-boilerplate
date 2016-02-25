var React = require('react')
var mixins = require('baobab-react/mixins')
var xhr = require('xhr')
var actions = require('../../actions')

module.exports = React.createClass({
  mixins: [mixins.branch],
  cursors: {
    title: ['title'],
    featureList: ['featureList']
  },
  actions: {
    changeTitle: actions.changeTitle,
    changeFeatureList: actions.changeFeatureList
  },
  getInitialState: function() {
    return {
      setTitle: 'hello'
    }
  },
  componentDidMount: function() {
    this.fetchFeatureData()
  },
  fetchFeatureData: function() {
    var self = this
    xhr({
      method: 'GET',
      uri: '/feature',
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(err, resp, body) {
      if (err) {
        return false
      } else {
        var data = JSON.parse(body)
        self.actions.changeTitle(data.title)
        self.actions.changeFeatureList(data.featureList)
      }

    })
  },
  render: function() {
    var featureList = this.state.featureList && this.state.featureList.map(function(element) {
        return (
          <li key={element.id}>{element.name}</li>
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

