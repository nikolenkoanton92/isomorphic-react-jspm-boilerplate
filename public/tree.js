var Baobab = require('baobab')

//rename to store

module.exports = function Tree(data) {
  var tree = new Baobab({
    user: {},
    loggedIn: false,
    title: {},
    featureList: []
  })

  for (var key in data) {
    tree.set(key, data[key])
  }

  return tree
}
