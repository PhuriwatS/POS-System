'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_END_POINT: '"https://api.jsonbin.io/b/5c52a1be15735a25423d3540"'
  // The below url endpoint is not work
  // END_POINT: '"https://api.lbbs.line-beta.me/b/5c52a1be15735a25423d3540"'
})
