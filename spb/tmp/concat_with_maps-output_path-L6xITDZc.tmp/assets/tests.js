define('spb/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('spb/tests/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'application.js should pass jshint.\napplication.js: line 3, col 1, \'App\' is not defined.\napplication.js: line 5, col 1, \'App\' is not defined.\napplication.js: line 10, col 33, \'onClick\' is not defined.\napplication.js: line 10, col 54, \'Submit\' is not defined.\napplication.js: line 9, col 13, \'password\' is defined but never used.\n\n5 errors');
  });
});
define('spb/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('spb/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('spb/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'spb/tests/helpers/start-app', 'spb/tests/helpers/destroy-app'], function (exports, _qunit, _spbTestsHelpersStartApp, _spbTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _spbTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _spbTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('spb/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('spb/tests/helpers/resolver', ['exports', 'ember/resolver', 'spb/config/environment'], function (exports, _emberResolver, _spbConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _spbConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _spbConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('spb/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('spb/tests/helpers/start-app', ['exports', 'ember', 'spb/app', 'spb/config/environment'], function (exports, _ember, _spbApp, _spbConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _spbConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _spbApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('spb/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('spb/tests/models/homepage.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/homepage.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/homepage.js should pass jshint.');
  });
});
define('spb/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 8, col 1, \'App\' is not defined.\nrouter.js: line 10, col 1, \'App\' is not defined.\n\n2 errors');
  });
});
define('spb/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 2, col 1, \'App\' is not defined.\nroutes/index.js: line 4, col 1, \'App\' is not defined.\nroutes/index.js: line 9, col 33, \'onClick\' is not defined.\nroutes/index.js: line 9, col 54, \'Submit\' is not defined.\nroutes/index.js: line 8, col 13, \'password\' is defined but never used.\n\n5 errors');
  });
});
define('spb/tests/test-helper', ['exports', 'spb/tests/helpers/resolver', 'ember-qunit'], function (exports, _spbTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_spbTestsHelpersResolver['default']);
});
define('spb/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('spb/tests/unit/models/homepage-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('homepage', 'Unit | Model | homepage', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('spb/tests/unit/models/homepage-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/homepage-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/homepage-test.js should pass jshint.');
  });
});
define('spb/tests/unit/routes/homepage-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:homepage', 'Unit | Route | homepage', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('spb/tests/unit/routes/homepage-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/homepage-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/homepage-test.js should pass jshint.');
  });
});
define('spb/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('spb/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/index-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('spb/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map