QUnit.module('JSHint - .');
QUnit.test('application.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'application.js should pass jshint.\napplication.js: line 3, col 1, \'App\' is not defined.\napplication.js: line 5, col 1, \'App\' is not defined.\napplication.js: line 10, col 33, \'onClick\' is not defined.\napplication.js: line 10, col 54, \'Submit\' is not defined.\napplication.js: line 9, col 13, \'password\' is defined but never used.\n\n5 errors'); 
});
