define('spb/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'spb/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _spbConfigEnvironment) {

  var name = _spbConfigEnvironment['default'].APP.name;
  var version = _spbConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});