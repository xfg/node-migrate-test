'use strict'

module.exports.up = function (next) {
  console.log('up 1 migration');
  next()
}

module.exports.down = function (next) {
  console.log('down 1 migration');
  next()
}
