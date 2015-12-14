define('spb/tests/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application.js should pass jshint.');
  });
});