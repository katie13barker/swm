define('spb/router', ['exports', 'ember', 'spb/config/environment'], function (exports, _ember, _spbConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _spbConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});