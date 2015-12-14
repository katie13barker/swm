define('spb/tests/test-helper', ['exports', 'spb/tests/helpers/resolver', 'ember-qunit'], function (exports, _spbTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_spbTestsHelpersResolver['default']);
});