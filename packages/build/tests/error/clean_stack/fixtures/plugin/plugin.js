module.exports = {
  name: 'netlify-plugin-example',
  onInit({
    utils: {
      error: { failBuild },
    },
  }) {
    failBuild('test')
  },
}
