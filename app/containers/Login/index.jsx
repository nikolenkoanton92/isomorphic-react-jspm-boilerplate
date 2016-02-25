var React = require('react')
var mixins = require('baobab-react/mixins')
var xhr = require('xhr')
var actions = require('../../actions')

module.exports = React.createClass({
  mixins: [mixins.branch],
  cursors: {
    title: ['title']
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  actions: {
    setUser: actions.setUser,
    changeTitle: actions.changeTitle,
    loginUser: actions.loginUser
  },
  getInitialState: function() {
    return {
      username: '',
      password: '',
      errorMsg: ''
    }
  },
  componentDidMount: function() {
    this.fetchLoginData()
  },
  fetchLoginData: function() {
    var self = this
    xhr({
      method: 'GET',
      uri: '/login',
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
  resetErrorMessage: function() {
    this.setState({
      errorMsg: ''
    })
  },
  handleUsernameChange: function(event) {
    this.resetErrorMessage()
    this.setState({
      username: event.target.value
    })
  },
  handlePasswordChange: function(event) {
    this.resetErrorMessage()
    this.setState({
      password: event.target.value
    })
  },
  handleSubmitLogin: function(event) {
    event.preventDefault()
    var username = this.state.username.trim()
    var password = this.state.password.trim()

    if (!username || !password) {
      return false
    }

    var self = this

    xhr({
      method: 'POST',
      uri: '/login',
      json: {
        username: username,
        password: password
      }
    }, function(err, response, body) {
      if (err || body === 'Unauthorized') {
        self.setState({
          errorMsg: 'Invalid username or password'
        })
        return false
      } else {
        self.actions.setUser(body.user)
        self.actions.loginUser(true)
        self.context.router.push('/dashboard')
      }
    })

  },
  render: function() {
    var displayErrorMsg = {
      display: this.state.errorMsg ? 'block' : 'none'
    }
    return (
      <div className="container">
        <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{this.state.title}</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.handleSubmitLogin}>
              <fieldset>
              <div className="form-group has-feedback">
                <input className="form-control" onChange={this.handleUsernameChange}  type="text" name="username" placeholder="Your username" />
              </div>
              <div className="form-group has-feedback">
                <input className="form-control" onChange={this.handlePasswordChange} type="password" name="password" placeholder="Your password" />
              </div>
              <span className="alert alert-danger" style={displayErrorMsg}>{this.state.errorMsg}</span>
              <button className="btn btn-lg btn-success btn-block" type="submit">Login</button>
              </fieldset>
                <h5>username : hunter33</h5>
                <h5>password : password1</h5>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
      )
  }
})
