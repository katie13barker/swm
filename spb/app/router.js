import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

App = Ember.Application.create();

App.Router.map(function() {
  this.route("homepage");
});


export default Router;
