define('spb/tests/routes/homepage.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/homepage.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/homepage.js should pass jshint.');
  });
});