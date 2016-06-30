const { getConfigure } = require('./someConfig')

module.exports = function(){
  const configure = getConfigure()
  console.log(configure)
}