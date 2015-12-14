define('spb/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'spb/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _spbConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_spbConfigEnvironment['default'].APP.name, _spbConfigEnvironment['default'].APP.version)
  };
});