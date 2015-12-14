define('spb/models/homepage', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr(),
    age: _emberData['default'].attr(),
    location: _emberData['default'].attr()
  });
});