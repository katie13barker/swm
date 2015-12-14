define('spb/tests/models/homepage.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/homepage.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/homepage.js should pass jshint.');
  });
});