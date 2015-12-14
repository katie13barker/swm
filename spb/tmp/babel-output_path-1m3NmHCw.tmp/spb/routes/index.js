define('spb/routes/index', ['exports', 'ember'], function (exports, _ember) {
    App = _ember['default'].Application.create();

    App.IndexController = _ember['default'].Controller.extend({
        'function': function _function() {
            var username = document.getElementById('username');
            username.focus();
            var password = document.getElementById('password');
            document.getElementById(onClick).innerHTML = Submit;
        }
    });
    exports['default'] = _ember['default'].Route.extend({});
});