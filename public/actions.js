module.exports = {
  changeTitle: function(tree, title) {
    tree.set('title', title)
  },
  changeFeatureList: function(tree, featureList) {
    tree.set('featureList', featureList)
  },
  authUser: function(tree, user) {
    tree.set('user', user)
  }
}
