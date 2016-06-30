const { setConfigure, getConfigure } = require('./someConfig')

module.exports = function(){
  setConfigure({
    foo: "overwrite_foo",
    baz: "overwrite_baz"
  })
  const configure = getConfigure()
  console.log(configure)
}