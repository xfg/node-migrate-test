'use strict'

module.exports.up = function (next) {
  console.log('up 2 migration');
  next()
}

module.exports.down = function (next) {
  console.log('down 2 migration');
  next()
}
