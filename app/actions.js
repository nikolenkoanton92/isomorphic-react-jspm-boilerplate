module.exports = {
  changeTitle: function(tree, title) {
    tree.set('title', title)
  },
  changeFeatureList: function(tree, featureList) {
    tree.set('featureList', featureList)
  },
  setUser: function(tree, user) {
    tree.set('user', user)
  },
  unSetUser: function(tree){
    tree.set('user',{})
  },
  loginUser: function(tree) {
    tree.set('loggedIn', true)
  },
  logout: function(tree) {
    tree.set('loggedIn', false)
  }
}
