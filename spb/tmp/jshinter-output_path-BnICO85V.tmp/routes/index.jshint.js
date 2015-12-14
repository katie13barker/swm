QUnit.module('JSHint - routes');
QUnit.test('routes/index.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 2, col 1, \'App\' is not defined.\nroutes/index.js: line 4, col 1, \'App\' is not defined.\nroutes/index.js: line 9, col 33, \'onClick\' is not defined.\nroutes/index.js: line 9, col 54, \'Submit\' is not defined.\nroutes/index.js: line 8, col 13, \'password\' is defined but never used.\n\n5 errors'); 
});
