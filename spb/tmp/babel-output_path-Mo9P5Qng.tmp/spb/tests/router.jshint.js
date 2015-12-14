define('spb/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 8, col 1, \'App\' is not defined.\nrouter.js: line 10, col 1, \'App\' is not defined.\n\n2 errors');
  });
});