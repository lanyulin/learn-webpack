const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  console.log(options);
  const result = source.replace(options.origin, options.target);
  // return result;
  this.callback(null, result);
}