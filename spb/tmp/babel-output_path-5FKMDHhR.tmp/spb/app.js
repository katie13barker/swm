define('spb/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'spb/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _spbConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _spbConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _spbConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _spbConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});