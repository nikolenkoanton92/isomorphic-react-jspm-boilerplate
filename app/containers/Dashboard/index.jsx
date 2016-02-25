var React = require('react')
var mixins = require('baobab-react/mixins')
var xhr = require('xhr')
var actions = require('../../actions')

module.exports = React.createClass({
  mixins: [mixins.branch],
  cursors: {
    title: ['title'],
    user: ['user']
  },
  actions: {
    changeTitle: actions.changeTitle
  },
  componentDidMount: function() {
    this.fetchDashboardData()
  },
  fetchDashboardData: function() {
    var self = this
    xhr({
      method: 'GET',
      uri: '/dashboard',
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(err, resp, body) {
      if (err) {
        return false
      } else {
        var data = JSON.parse(body)
        self.actions.changeTitle(data.title)
      }
    })
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">{this.state.title}</h2>
          <h4 className="text-center">User id is : "{this.state.user.id}"</h4>
          <h4 className="text-center">User username is : "{this.state.user.username}"</h4>
          <p className="text-center">Private Page </p>
        </div>
      </div>
      )
  }
})

