define('spb/tests/helpers/resolver', ['exports', 'ember/resolver', 'spb/config/environment'], function (exports, _emberResolver, _spbConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _spbConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _spbConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});