let currentConfig = {
  foo: "default_foo",
  baz: "default_baz"
}

module.exports.setConfigure = (c) => {
  currentConfig = c
}

module.exports.getConfigure = () => {
  return currentConfig
}