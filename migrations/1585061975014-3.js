'use strict'

module.exports.up = function (next) {
  console.log('up 3 migration');
  next()
}

module.exports.down = function (next) {
  console.log('down 3 migration');
  next()
}
