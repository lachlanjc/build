// eslint-disable-next-line node/no-extraneous-require
const pathExists = require('path-exists')

module.exports = {
  name: 'netlify-plugin-test',
  async onInit({ utils: { cache } }) {
    console.log(await cache.restore('non_existing'))
    console.log(await pathExists('non_existing'))
  },
}
