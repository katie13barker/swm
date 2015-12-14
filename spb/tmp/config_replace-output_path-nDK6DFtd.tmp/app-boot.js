/* jshint ignore:start */

define('spb/config/environment', ['ember'], function(Ember) {
  var prefix = 'spb';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("spb/app")["default"].create({"name":"spb","version":"0.0.0+1a3388e2"});
}

/* jshint ignore:end */
