define('spb/router', ['exports', 'ember', 'spb/config/environment'], function (exports, _ember, _spbConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _spbConfigEnvironment['default'].locationType
  });

  App = _ember['default'].Application.create();

  App.Router.map(function () {
    this.route("homepage");
  });

  exports['default'] = Router;
});